import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscription } from './routes/create-transcription';
import { generateAi } from './routes/generate-ai';

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscription)
app.register(generateAi)

app.listen({
  port: 3333
}).then(() => {
  console.log('Http server running..');
})
