<template>
    <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="product in products" :key="product.id" :href="product.href" class="group">
                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover group-hover:opacity-75" />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">
                {{ product.name }}
                </h3>
                <p class="mt-1 text-lg font-medium text-gray-900">
                {{ product.price }}
                </p>
            </a>
            </div>
        </div>
    </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: '【招桃花】',
    href: '#',
    price: 'NT$ 1348',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: '【招貴人】Nomad Tumbler',
    href: '#',
    price: 'NT$ 1735',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: '【招財】Focus Paper Refill',
    href: '#',
    price: 'NT$ 1289',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper car$',
  },
  {
    id: 4,
    name: '【招好運】Machined Mechanical Pencil',
    href: '#',
    price: 'NT$ 1435',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: '【招財】Focus Paper Refill',
    href: '#',
    price: 'NT$ 1289',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper car$',
  },
  {
    id: 5,
    name: '【招好運】Machined Mechanical Pencil',
    href: '#',
    price: 'NT$ 1635',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

export default {
  setup() {
    return {
      products,
    }
  },
}
</script>

