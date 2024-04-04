import { Cloudinary } from '@cloudinary/url-gen'

export const cloudinary = new Cloudinary({
  cloud: { cloudName: import.meta.env.VITE_CLOUDE_NAME! }
})

export const cloudinaryUpload = cloudinary
