const REPLICATE_MODEL_VERSION = "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa"

const startGeneration = async (prompt) => {

    console.log(process.env.REPLICATE_API_URL, process.env.REPLICATE_API_TOKEN)
    const response = await fetch(`${process.env.REPLICATE_API_URL}/predictions`, {
        headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
            version: REPLICATE_MODEL_VERSION,
            input: {
                text: prompt
            }
        })
    })

    return response.json();
}


const getGeneration = async (url) => {
    const result = await fetch(url, {
        headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            'Content-Type': 'application/json',
        }
    })
    return result.json();
}




export default async (request, response) => {
    const { prompt } = request.body;
    console.log(prompt);
    if(!prompt) {
        response.status(400).json('No Prompt provided');
    }

    const predictions = await startGeneration(prompt);
    console.log(predictions)
    let generatedImage;

    while(!generatedImage) {
        const result = await getGeneration(predictions?.urls?.get);
        if(result.status === 'succeeded') {
            console.log(result)
            [generatedImage] = result.output;
        } else if (result.status === 'failed') {
            break;
        } else {
            await new Promise((resolve) => setTimeout(() => {
                resolve
            }, 1000))
        }
    }

    response.status(200).json(generatedImage ? generatedImage : 'Failed to generate the image');

}