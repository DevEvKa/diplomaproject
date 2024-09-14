<template>
  <main class="main">
    <section class="main__banner">
      <div class="main__banner-image">
        <img
          :src="bannerItem.src"
          alt="Баннер"
        >
      </div>
      <div class="main__banner-content">
        <h1 class="h1 main__banner-title">Учи русский язык играя</h1>
        <p class="h5 main__banner-text">Присоединяйся к нашим увлекательным урокам и открой для себя мир русского языка через игры и забавные задания!</p>
        <div class="main__banner-buttons">
          <VButton
            text="пройти тестирование"
            to="/exam"
            color="white"
            rounded
            class="main__banner-button"
          />
        </div>
      </div>
    </section>

    <BlockFactoids
      :items="factoidsItems"
    />
<!-- 
    <BlockTextImage50
      v-for="(item, index) in advantagesItems"
      :key="index"
      class="main__advantages"
      :item="item"
    /> -->
    <section class="main__feedback">
      <h2 class="h2 main__feedback-title">О нас говорят</h2>
      <div
        v-if="feedbackItems.length > 4"
        class="slider__navigation"
      >
        <div
          :ref="(el) => prevBtnRef = (el as HTMLElement | null)"
          class="slider__navigation-left"
        >
          <VSvgIcon
            name="IconChevronLeft"
            size="md"
          />
        </div>
        <div
          :ref="(el) => nextBtnRef = (el as HTMLElement | null)"
          class="slider__navigation-right"
        >
          <VSvgIcon
            name="IconChevronRight"
            size="md"
          />
        </div>
      </div>
      <Swiper
        :modules="[Pagination, Navigation]"
        :pagination=" {
          el: '.swiper-pagination',
          type: 'bullets',
        }"
        :navigation="{
          prevEl: prevBtnRef,
          nextEl: nextBtnRef,
        }"
        :slides-per-view="4"
        :space-between="8"
      >
        <SwiperSlide
          v-for="(slide, index) in feedbackItems"
          :key="index"
          class="main__feedback-slide"
        >
          <img
            :src="slide.src"
            :alt="slide.alt"
            class="main__feedback-img"
          >
        </SwiperSlide>
        <div class="swiper-pagination slider__pagination"/>
      </Swiper>
    </section>

    <div class="main__social"
    >
      <h2 class="h2 main__social-title">Присоединяйтесь к нам в социальных сетях</h2>
      <div class="main__social-icons">
        <div
          v-for="(item, index) in socialItems"
          :key="index"
          class="main__social-icon"
        >
          <VButton
            :to="item.link"
            target="_blank"
            :icon="item.icon"
            icon-size="lg"
            color="transparent"
          />
        </div>
      </div>

      
    </div>
      

  </main>
  
</template>

<script setup lang="ts">
import { Pagination, Navigation } from 'swiper/modules';
//import type { Swiper as SwiperClass, SwiperOptions } from 'swiper/types';
import BlockTextImage50 from '~/components/blocks/BlockTextImage50.vue';
import BlockFactoids from '~/components/blocks/BlockFactoids.vue';
import VSvgIcon from '~/components/common/VSvgIcon.vue';
import VButton from '~/components/common/VButton.vue';

const prevBtnRef = ref<null | HTMLElement>(null);
const nextBtnRef = ref<null | HTMLElement>(null);

const bannerItem = {
  src: 'images/images/banner.jpg',
}

const factoidsItems = [
  {
    title: 'Доступность в любое время',
    text: 'Учитесь в любое время и в любом месте, не зависимо от расписания',
    icon: 'IconGlobe',
  },
  {
    title: 'Интерактивные задания',
    text: 'Увлекательные упражнения и игры, которые делают процесс обучения интересным',
    icon: 'IconSticker',
  },
  {
    title: 'Мультимедийные материалы',
    text: 'Используйте видео, аудио и изображения для лучшего усвоения материала',
    icon: 'IconPodcast',
  },
  {
    title: 'Индивидуальный подход',
    text: 'Курсы адаптированы под разные уровни знаний и интересы учащихся',
    icon: 'IconFolderUser',
  },
  {
    title: 'Сообщество единомышленников',
    text: 'Общайтесь и учитесь вместе с другими школьниками',
    icon: 'IconUsers',
  },
  {
    title: 'Возможность самооценки',
    text: 'Проходите тесты и отслеживайте свой прогресс',
    icon: 'IconListChecked',
  },
  {
    title: 'Удобный интерфейс',
    text: 'Легкая навигация по сайту, которая позволяет легко находить нужные материалы',
    icon: 'IconServices',
  },
  {
    title: 'Актуальные материалы',
    text: 'Все материалы обновляются и основаны на последних учебных методиках',
    icon: 'IconPage',
  },
  {
    title: 'Расширение словарного запаса',
    text: 'Эффективные методы для изучения новых слов и фраз',
    icon: 'IconLightbulb',
  },
];

const advantagesItems = [
  {
    subject: 'Доступность в любое время',
    title: 'Доступность в любое время',
    text: 'Учитесь в любое время и в любом месте, не зависимо от расписания.',
    image: {
      src: 'images/images/cards_right.png',
      alt: 'Доступность в любое время',
    },
  },
  {
    subject: 'Интерактивные задания',
    title: 'Увлекательные упражнения и игры, которые делают процесс обучения интересным.',
    text: 'dfghj',
    image: {
      src: 'images/images/cards_left.png',
      alt: 'Интерактивные задания',
    },
  },
  {
    subject: 'Возможность самооценки ',
    title: 'Возможность самооценки ',
    text: 'Проходите тесты и отслеживайте свой прогресс.',
    image: {
      src: 'images/images/cards_left.png',
      alt: 'Возможность самооценки ',
    },
  },
  {
    subject: 'Разнообразие тем',
    title: 'Разнообразие тем',
    text: 'Изучайте русский язык через различные темы: от культуры до повседневной жизни.',
    image: {
      src: 'images/images/cards_left.png',
      alt: 'Разнообразие тем',
    },
  },
  {
    subject: 'Удобный интерфейс',
    title: 'Удобный интерфейс',
    text: 'Легкая навигация по сайту, которая позволяет легко находить нужные материалы.',
    image: {
      src: 'images/images/cards_left.png',
      alt: 'Удобный интерфейс',
    },
  },
  {
    subject: 'Актуальные материалы',
    title: 'Актуальные материалы',
    text: 'Все материалы обновляются и основаны на последних учебных методиках.',
    image: {
      src: 'images/images/cards_left.png',
      alt: 'Актуальные материалы',
    },
  },
];

const feedbackItems = [
  {
    src: 'images/images/cards_right.png',
    alt: 'Отзыв 1',
  },
  {
    src: 'images/images/cards_right.png',
    alt: 'Отзыв 2',
  },
  {
    src: 'images/images/cards_right.png',
    alt: 'Отзыв 3',
  },
  {
    src: 'images/images/cards_right.png',
    alt: 'Отзыв 4',
  },
  {
    src: 'images/images/cards_right.png',
    alt: 'Отзыв 5',
  },

];

const socialItems = [
  {
    title: 'RuTube',
    icon: 'IconSocialRutube',
    link: 'https://rutube.ru/',
  },
  {
    title: 'Instagram',
    icon: 'IconSocialInstagram',
    link: 'https://www.instagram.com/',
  },
  {
    title: 'Telegram',
    icon: 'IconSocialTelegram',
    link: 'https://telegram.org/',
  },
  {
    title: 'Vk',
    icon: 'IconSocialVk',
    link: 'https://vk.com/',
  },
  {
    title: 'YouTube',
    icon: 'IconSocialYoutube',
    link: 'https://www.youtube.com/',
  },
]

</script>

<style lang="scss">
@import '@/assets/scss/common/mixins';

.main {

  &__banner {
    position: relative;
    min-height: 680px;
    border-radius: 20px;
    overflow: hidden;

    &-image {
      width: 100%;
      max-width: 100%;
      height: auto;

      img {
       display: inline-block;
       object-fit: cover;
       object-position: 50% 50%;
       width: 100%;
       height: 100%;
       min-height: 680px;
      }
    }

    &-content {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 100%;
      max-height: 99%;
      padding: 24px;
    }

    &-title {
      font-size: 70px;
      margin-bottom: 50px;
    }

    &-text {
      font-size: 40px;
      line-height: 44px;
    }

    &-buttons {
      margin-top: auto;
    }
  }

  &__feedback {
    position: relative;
    margin: 0 auto;

    &-title {
      padding: 30px 0 20px;
    }

    &-slide {
      width: 25%;
      height: 300px;
      border: 1px solid $color-grey;
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .slider__pagination {
      position: static !important;
      display: none;
      justify-content: center;
      height: 4px;
      transform: none !important;

      @include md {
        display: flex;
        margin-top: 12px;
      }
  
      .swiper-pagination-bullet {
        width: 4px;
        height: 4px;
        margin-right: 2px !important;
        margin-left: 2px !important;
        background-color: rgba($color-black, .1);
        opacity: 1;
        transform-origin: left;
  
        &.swiper-pagination-bullet-active {
          width: 31px;
          border-radius: 6px;
          background-color: $color-black;
          transform-origin: left;
          transition: background-color $default-transition, width $default-transition;
        }
      }
    }

    .swiper {
      width: 90%;

      @include md {
        width: 100%;
      }
    }

    .slider__navigation {
      position: absolute;
      top: 56%;
      width: 100%;
      display: flex;

      @include md {
        display: none;
      }

      &-left {
        margin-right: auto;
      }

      &-right {
        margin-left: auto;
      }

      & .icon {
        background-color: $color-grey-light;
        border-radius: 50%;
      }
    }

    
  }

  &__social {
    &-title {
      padding: 30px 0 20px;
    }

    &-icons {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $color-grey-light-extra;
      border-radius: 20px;

      @include md {
        border-radius: 12px;
      }
    }

    .icon {
      width: 180px;
      height: 180px
    }
  }

}

</style>
