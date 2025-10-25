import "./App.css";
import "./styles/responsive.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { PiComputerTowerThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { TiCalendarOutline } from "react-icons/ti";
import { LiaSmsSolid } from "react-icons/lia";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GrCloudComputer } from "react-icons/gr";
import { CgComponents } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { IoCheckmarkOutline } from "react-icons/io5";

function App() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact_details">
            <div className="phone_main">
              <div className="phone">
                <FaPhone />
                <p>+998 93 085 09 55</p>
              </div>
              <div className="email">
                <MdEmail />
                <a href="#">contact@examle.com</a>
              </div>
            </div>
            <div className="location">
              <CiLocationOn />
              <p>Karmana street, Navoiy, Uzbekistan</p>
            </div>
          </div>
        </div>
      </section>
      <header>
        <div className="container">
          <nav className="navbar">
            <section className="deepcode_logo">
              <div className="logo">
                <img src="/images/logoipsum-365.svg" alt="main_logo" />
              </div>
            </section>
            <section className="navbar_menu">
              <span>
                <a href="#">Home</a>
              </span>
              <span>
                <a href="#">Pages</a>
              </span>
              <span>
                <a href="#">Lms Shortcodes</a>
              </span>
              <span>
                <a href="#">Courses</a>
              </span>
              <span>
                <a href="#">Blog</a>
              </span>
              <span>
                <a href="#">Help Center</a>
              </span>
            </section>
            <section className="populated_elements">
              <span className="nav_icon">
                <IoIosSearch />
              </span>
              <span className="nav_icon">
                <IoPersonOutline />
              </span>
              <span className="nav_icon">
                <HiOutlineShoppingBag />
              </span>
              <span className="nav_icon">
                <BiMenuAltLeft />
              </span>
            </section>
          </nav>
        </div>
      </header>
      <section className="home">
        <section className="container">
          <div className="home_content">
            <section className="hero">
              <img src="images/Demo-1-Slider-Image-B.png" alt="" />
              <div className="computer_item">
                <span className="facomputer">
                  <PiComputerTowerThin />
                </span>
                <span className="k">
                  <p>59k</p>
                </span>
                <span className="total_students">
                  <p>Total Students</p>
                </span>
              </div>
              <div className="circle"></div>
            </section>
            <div className="hero-content">
              <span className="line">
                <TfiLayoutLineSolid />
              </span>
              <h1>
                The World's Best Online <br />
                <span className="highlight">Education Institute</span>
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                suscipit magnam et voluptatibus nostrum minima esse aspernatur
                ducimus natus dolores.
              </p>
              <div className="search-bar">
                <input type="text" placeholder="What do you need to learn?" />
                <button>Search</button>
              </div>
              <p className="stars">
                <span className="fastar">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                5-Star ratings on G2, Discord and More
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="top-courses">
        <span className="line">
          <TfiLayoutLineSolid />
        </span>
        <div className="title">
          <h1>
            Explore Top Courses
            <span className="highlight descript"> Categories</span>
          </h1>
          <p>
            Class odio natoque sociosqu etiam tempor orci. Sem et tortor
            consequat id. Fermentum egestas tellus. Nunc eu hendrerit turpis.
            Fusce non lectus sem In pellentesque nunc.
          </p>
        </div>
        <div className="courses-wrapper">
          <article className="courses_article">
            <img
              src="https://livi.wpengine.com/wp-content/uploads/2024/04/cate-icon-3.svg"
              alt="img"
            />
            <span className="courses_field">Art Illustration</span>
            <span className="courses_desc">2 courses</span>
            <div className="courses_icon">
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </article>
          <article className="courses_article">
            <img
              src="https://livi.wpengine.com/wp-content/uploads/2024/04/cate-icon-3.svg"
              alt="img"
            />
            <span className="courses_field">Art Illustration</span>
            <span className="courses_desc">2 courses</span>
            <div className="courses_icon">
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </article>
          <article className="courses_article">
            <img
              src="https://livi.wpengine.com/wp-content/uploads/2024/04/cate-icon-4.svg"
              alt="img"
            />
            <span className="courses_field">Art Illustration</span>
            <span className="courses_desc">2 courses</span>
            <div className="courses_icon">
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </article>
          <article className="courses_article">
            <img
              src="https://livi.wpengine.com/wp-content/uploads/2024/04/cate-icon-7.svg"
              alt="img"
            />
            <span className="courses_field">Art Illustration</span>
            <span className="courses_desc">2 courses</span>
            <div className="courses_icon">
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </article>
        </div>
      </section>
      <section className="advanced_program">
        <div className="container">
          <div className="advanced_program_desc">
            <div className="program">
              <span>
                <TfiLayoutLineSolid />
              </span>
              <h2>
                Advanced Of
                <span className="highlight our_program"> Our Program</span>
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati nam vel dolores fugiat nostrum? Quisquam vero
                molestiae reprehenderit cupiditate.
              </p>
            </div>
            <div className="program_container">
              <div className="program_card">
                <div className="program_icon">
                  <TiCalendarOutline />
                </div>
                <div>
                  <h2>99M</h2>
                  <p>
                    Et sollicitudin ac orci phasellus. Eu mi bibendum neque.
                  </p>
                </div>
              </div>
              <div className="program_card">
                <div className="program_icon">
                  <LiaSmsSolid />
                </div>
                <div>
                  <h2>9/10</h2>
                  <p>Nunc curabitur donec imperdiet sed euismod nisi.</p>
                </div>
              </div>
            </div>
            <div className="program_container">
              <div className="program_card">
                <div className="program_icon">
                  <MdOutlineOndemandVideo />
                </div>
                <div>
                  <h2>95%</h2>
                  <p>Magna inceptos viverra hac imperdiet sed euismod nisi.</p>
                </div>
              </div>
              <div className="program_card">
                <div className="program_icon">
                  <GrCloudComputer />
                </div>
                <div>
                  <h2>50k</h2>
                  <p>Placerat in egestas erat imperdiet sed euismod nisi.</p>
                </div>
              </div>
            </div>
            <div className="explore_section">
              <div>
                <button>
                  <span>Explore More</span>
                </button>
              </div>
              <div className="consult">
                <div>
                  <img
                    src="https://livi.wpengine.com/wp-content/uploads/2024/08/home-1-advantage-helper-image.jpg"
                    alt="img"
                  />
                </div>
                <div>
                  <h5>Question?</h5>
                  <p>Consult Our Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="program_photo">
            <div className="program_photo1">
              <img
                src="https://livi.wpengine.com/wp-content/uploads/2024/11/Teach-Img-2.jpg"
                alt="img"
              />
            </div>
            <div className="program_photo2">
              <div className="program_photo_item">
                <div className="img">
                  <img
                    src="https://livi.wpengine.com/wp-content/uploads/2024/11/Teach-Img-4.jpg"
                    alt="img"
                  />
                </div>
              </div>

              <div className="program_cards">
                <div className="program_img">
                  <img
                    src="https://livi.wpengine.com/wp-content/uploads/2024/09/Students-Image.png"
                    alt="img"
                  />
                </div>
                <div>
                  <h2>860+</h2>
                  <p>Happy Students</p>
                </div>
              </div>
              <div className="program_item">
                <div className="program_item_img">
                  <span className="program_icon">
                    <CgComponents />
                  </span>
                </div>
                <div>
                  <h2>250k</h2>
                  <p>Enrolled Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="catalog">
        <div className="container flex_container">
          <div className="catalog_container">
            <div className="catalog_flex">
              <span className="catalog_img1">
                <img
                  src="https://livi.wpengine.com/wp-content/uploads/2024/10/service-filler-img.jpg"
                  alt="img"
                />
              </span>
              <span className="catalog_img2">
                <img
                  src="https://livi.wpengine.com/wp-content/uploads/2024/10/service-filler-img-6.jpg"
                  alt="img"
                />
              </span>
            </div>
            <span className="catalog_img3">
              <img
                src="https://livi.wpengine.com/wp-content/uploads/2024/10/service-filler-imag-7.jpg"
                alt="img"
              />
            </span>
          </div>
          <div className="catalog_courses">
            <div>
              <span className="line">
                <TfiLayoutLineSolid />
              </span>
              <h1>
                Advanced Of <span className="highlight ">Our Program</span>
              </h1>
              <p>
                Etiam sodales fermentum vivamus etiam tempor orci. Sem et tortor
                consequat egestas
                <br />
                tellus. Nunc eu hendrerit turpis. Fusce non lectus sem In
                pellentesque nunc.
              </p>
            </div>
            <div>
              <div className="catalog_education">
                <h4>Education:</h4>
                <h4>80%</h4>
              </div>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>

              <div className="catalog_education">
                <h4>Motivation:</h4>
                <h4>75%</h4>
              </div>
              <div className="progress-bar">
                <div className="progress2"></div>
              </div>

              <div className="catalog_education">
                <h4>Coaching:</h4>
                <h4>78%</h4>
              </div>
              <div className="progress-bar">
                <div className="progress3"></div>
              </div>
              <button className="catalog_button">
                <span>Explore More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="offerings">
            <span className="line">
              <TfiLayoutLineSolid />
            </span>
            <h1>
              View Our Course <span className="highlight">Offerings</span>
            </h1>
            <p>
              Ante fermentum fringilla fermentum etiam tempor orci. Sem et
              tortor consequat id. Fermentum egestas tellus. Nunc eu hendrerit
              turpis. Fusce non lectus sem In pellentesque nunc.
            </p>
          </div>
          <div className="card_section">
            <div className="card1">
              <span className="star">
                <CiStar />
              </span>
              <p className="silver">Silver</p>
              <div className="border"></div>
              <h1>$ 500</h1>
              <p>Incl.All Taxes</p>
              <div className="border"></div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p>Lifetime course access</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p>Access to library</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p>Verified certificate upon completion</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p className="lighter">Real-time interaction</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p className="lighter">Structured Learning Paths</p>
              </div>
              <div className="button">
                <button>Choose Plan</button>
              </div>
            </div>

            <div className="card1">
              <span className="star">
                <CiStar />
              </span>
              <p className="silver">Silver</p>
              <div className="border"></div>
              <h1>$ 500</h1>
              <p>Incl.All Taxes</p>
              <div className="border"></div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p>Lifetime course access</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p>Access to library</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p>Verified certificate upon completion</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p className="lighter">Real-time interaction</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p className="lighter">Structured Learning Paths</p>
              </div>
              <div className="button">
                <button>Choose Plan</button>
              </div>
            </div>

            <div className="card1">
              <span className="star">
                <CiStar />
              </span>
              <p className="silver">Silver</p>
              <div className="border"></div>
              <h1>$ 500</h1>
              <p>Incl.All Taxes</p>
              <div className="border"></div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p>Lifetime course access</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p>Access to library</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p>Verified certificate upon completion</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p className="lighter">Real-time interaction</p>
              </div>
              <div className="checkmark_item">
                <span className="checkmark">
                  <IoCheckmarkOutline />
                </span>
                <p className="lighter">Structured Learning Paths</p>
              </div>
              <div className="button">
                <button>Choose Plan</button>
              </div>
            </div>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
