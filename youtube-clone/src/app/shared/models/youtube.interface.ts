export class Result {
  id: string
  title: string
  thumbnailUrl: string
  videoUrl: string
  description: string

  constructor(obj?: any) {
    this.id = obj && obj.id || null
    this.title = obj && obj.title || null
    this.description = obj && obj.title || null
    this.thumbnailUrl = obj && obj.thumbnailUrl || null
    this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`
  }

}