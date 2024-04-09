import { Cloudinary } from '@cloudinary/url-gen'

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDE_NAME!
  }
})

export const cloudinaryUpload = cloudinary
