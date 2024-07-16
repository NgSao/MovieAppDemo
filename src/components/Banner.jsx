import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/i1.webp";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
    return (
        <div className="md:h-[600px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative mt-[75px]">
            <div className="w-full h-full bg-black/40 " />
            <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full ">
                <div className="md:w-[50%] w-full ">
                    <div className="flex flex-col space-y-6 items-start p-10">
                        <p className="bg-gradient-to-r from-blue-600 to-blue-300 py-2 px-6">
                            Hot Nhất
                        </p>
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-[40px] font-bold text-white ">
                                Liên minh công lý: Khủng hoảng trên Trái đất vô tận Phần ba (2024)
                            </h1>
                            <div className="flex items-center space-x-3">
                                <img src={IconRating} alt="rating" className="w-8 h-8" />
                                <img src={IconRating} alt="rating" className="w-8 h-8" />
                                <img src={IconRating} alt="rating" className="w-8 h-8" />
                                <img src={IconRating} alt="rating" className="w-8 h-8" />
                                <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
                            </div>
                            <p className="text-white">
                                Bây giờ đã hoàn toàn lộ diện là mối đe dọa cuối cùng đối với sự tồn tại, Anti-Monitor tiến hành một cuộc tấn công không ngừng nghỉ vào những Trái đất còn sống sót đang đấu tranh để sinh tồn trong một vũ trụ bỏ túi. Từng thế giới một, những thế giới này và tất cả cư dân của chúng đều bị bốc hơi! Trên những hành tinh còn lại, ngay cả thời gian cũng bị phá vỡ, và những anh hùng từ quá khứ đã tham gia cùng Liên minh Công lý và những đồng minh hỗn tạp của họ chống lại hiện thân của cái ác. Nhưng khi họ thực hiện cuộc chiến cuối cùng, liệu sự hy sinh của các siêu anh hùng có đủ để cứu tất cả chúng ta không?
                            </p>
                        </div>

                        <div className="flex items-center space-x-5">
                            <button className="py-2 px-3 bg-black  text-white border border-black font-bold">
                                Chi tiết
                            </button>
                            <button className="py-2 px-3 bg-blue-600 text-white font-bold">
                                Xem Phim
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] w-full flex items-center justify-center">
                    <div className="w-[300px] h-[400px] relative group">
                        <button className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            <img src={IconPlay} alt="play" className="w-16 h-16" />
                        </button>
                        <img
                            src={ImgMovie}
                            alt="banner"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
