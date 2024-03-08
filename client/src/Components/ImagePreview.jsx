export const ImagePreview = ({ image, name }) => {
   return (
      <div className="size-32 mt-2 flex justify-center p-2 border-2 border-gray-400 mx-auto rounded-md">
         {/* <img src="https://i.pravatar.cc" className="w-32 rounded-md" alt='profile' /> */}
         <img src={image ? image : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} className="w-32 rounded-md object-contain" alt={name} />
      </div>
   )
}