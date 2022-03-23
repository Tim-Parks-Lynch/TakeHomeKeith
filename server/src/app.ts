import express, { Request, Response, NextFunction } from 'express'

const PORT = process.env.SERVER_PORT || 3000
const app = express()

app.use(express.json())

app.get('/', (req:Request, res: Response) => {
  res.send('Hello, the server is running :)')
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message })
})

app.listen(PORT, () => {
  console.log(`backend server is running on port ${PORT}`)
})