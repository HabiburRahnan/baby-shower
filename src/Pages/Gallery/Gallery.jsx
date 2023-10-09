
const Gallery = () => {
  return (
    <div>
      <div className="py-6">
        <h3 className="text-5xl text-center font-bold text-pink-500 mb-6">
          GALLERY
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <img
            className="w-96 h-80 rounded-lg"
            src="https://i.ibb.co/VJ47zzy/download-2.jpg"
            alt=""
          />
          <img
            className="w-96 h-80 rounded-lg"
            src="https://i.ibb.co/CnbBYCM/images.jpg"
            alt=""
          />
          <img
            className="w-96 h-80 rounded-lg"
            src="https://i.ibb.co/xLCJFxZ/download-4.jpg"
            alt=""
          />
          <img
            className="w-96 h-80 rounded-lg"
            src="https://i.ibb.co/F077syx/download-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
