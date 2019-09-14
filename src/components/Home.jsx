import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeadingWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const MainHeading = styled.h1`
  font-size: 46px;
  margin: 0;
  width: 80%;
`;

const Logo = styled.img`
  width: 200px;
  margin-right: 40px;
`;

function Home() {
  const slides = [
    {
      img: '/homeSlider/1.jpg',
      description: 'Юридична консультація',
    },
    {
      img: '/homeSlider/2.jpg',
      description: 'Лекції, навчання, тренінги',
    },
    {
      img: '/homeSlider/3.jpg',
      description: 'Дозвілля',
    },
    {
      img: '/homeSlider/4.jpg',
      description: 'Соціальна допомога',
    },
    {
      img: '/homeSlider/5.jpg',
      description: 'Психологічна консультація',
    },
  ];

  return (
    <main className="main">
      <HeadingWrapper>
        <Logo src="/logo.jpg" alt="logo" />
        <MainHeading>Львівський Центр Надання Послуг Учасникам Бойових Дій</MainHeading>
      </HeadingWrapper>
      <Carousel showArrows={true}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.img} alt={slide.description} />
          </div>
        ))}
      </Carousel>
      <section className="main__about">
        <p>
          Надання послуг учасникам бойових дій учасникам АТО, сім'ям загиблих, військовим частинам та іншим військовим
          формуванням, а також у зв'язку з необхідністю координації дій волонтерів і громадських організацій, які
          надають допомогу учасникам АТО та їх сім'ям
        </p>
        <p>
          Центр надає консультативну допомогу та сприяє учасникам АТО, щодо отримання необхідних документів, оформлення
          пільг та соціальних гарантій, лікування, реабілітації, працевлаштування тощо. Координує комплекс заходів, що
          здійснюються на місцевому рівні з метою юридичної, реабілітаційної, інформаційної та іншої соціальної
          підтримки та надання послуг учасникам бойових дій, членам їх сімей загиблих учасників, які брали безпосередню
          участь в антитерористичній операції та забезпечували її проведення.
        </p>
      </section>
    </main>
  );
}

export default Home;
