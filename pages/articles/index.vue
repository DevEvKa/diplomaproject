<template>
	<section class="articles">
		<h2 class="articles__title">Статьи</h2>
		<BlockTextImage50
			v-for="item in articlesItemsToShow"
			:key="item.id"
			:image="item.preview"
			:is-left-image="item.isLeftImage"
			class="articles__item"
		>
			<template v-slot:block-text-image-50>
				<div class="articles__item-top">
					<p class="articles__item-author">{{ item.authorShort }}</p>
					<p class="articles__item-date">{{ item.date }}</p>
				</div>
				<h3 class="articles__item-title">{{ item.title }}</h3>
				<p class="articles__item-text">{{ item.text }}</p>
				<VButton
					:to="`/articles/${item.id}`"
          			text="Подробнее..."
					type="link"
					color="gray"
					class="articles__item-link"
				/>
			</template>	
		</BlockTextImage50>

		<VButton
			type="link"
			color="gray"
			class="articles__more"
			:disabled="isMoreButtonDisabled"
			@click="lengthToShowIncrease"
		>
			Ещё...
		</VButton>


	</section>
</template>

<script setup lang="ts">
import BlockTextImage50 from '~/components/blocks/BlockTextImage50.vue';
import VButton from '~/components/common/VButton.vue';

import { useArticlesStore } from "~/store/articles";

const usersStore = useArticlesStore();

const lengthToShow = ref(2);
const isMoreButtonDisabled = computed(() => usersStore.articlesItems.length  === articlesItemsToShow.value.length);

const articlesItemsToShow = computed(() => {
	return usersStore.articlesItems.slice(0, lengthToShow.value)
})

const lengthToShowIncrease = () => {
	if (usersStore.articlesItems.length > articlesItemsToShow.value.length) {
		if (usersStore.articlesItems.length  === (articlesItemsToShow.value.length + 1)) {
			lengthToShow.value += 1
		}
		lengthToShow.value += 2
	}
	return
}

</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/mixins';
@import '@/assets/scss/common/variables';

.articles {
	display: flex;
	flex-direction: column;

	&__title {
		margin-bottom: 40px;
	}

	&__item {
		height: 300px;
		padding: 8px;
		background-color: $color-grey-light-extra;
		border-radius: 20px;
		overflow: hidden;

		&-top {
			display: flex;
			gap: 28px;
			margin-bottom: 20px;
		}

		&-author,
		&-date {
			font-size: 20px;
			font-weight: 600;
			color: $color-grey-dark-extra;
		}

		&-author {
			position: relative;

			&::after {
				content: '';
				position: absolute;
				top: calc(50% - 3px);
				right: -16px;
				display: block;
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: $color-grey-dark-extra;


			}
		}

		&-title {
			margin-bottom: 24px;
		}

		&-text {
			position: relative;
			max-height: 54px;
			overflow: hidden;
			margin-bottom: 30px;

			&::after {
				content: '';
				display: block;
				width: 100%;
				height: 50%;
				bottom: -4px;
				position: absolute;
				z-index: 5;
				background-clip: text;
				background: linear-gradient(to top, $color-grey-light-extra, transparent);
			}
		}

		&-link {
			font-size: 20px;
			font-weight: 600;
			color: $color-black;
		}

		:deep(.block-text-image-50__image) {
			border-radius: 20px;
			overflow: hidden;
		}
	}

	&__more {
		margin-left: auto;
		font-size: 40px;
		padding: 30px 0;
	}




}



</style>
  
  
  