[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Foi9Y-xE)
# React JS - NextJS Lab Day Gallery

**Goal:** Create a gallery page using NextJS similar to Unsplash. Recreate the site shown on the demo video as much as you can.

Demo: [https://drive.google.com/file/d/1QQgcX9hPnKsV48KKYS8AE7x5cHQG_QPR/view?usp=sharing]

## Instructions ✅

1. Create a NextJS project by running `npx create-next-app@latest`. Name your app **nextjs-gallery**.
2. Use App Router for the project. Create a route/folder called `/gallery` inside your *app* directory.
3. Create a navigation component so that it is easier to switch between your home and gallery pages. Use `<Link></Link>` component from 'next/link' instead of `<a></a>`.
4. Fetch the photos from `https://jsonplaceholder.typicode.com/photos` and display the thumbnails in the gallery page.
5. Each image should be clickable. Create a dynamic route for the photo detail page.
6. Clicking on an image will open a modal created using a Parallel and Intercepting route.
7. Refreshing the page while the modal is open should load the actual photo detail page.
8. Commit and push your changes once you are done.

### Important Notes 📝

- Use TailwindCSS classes to style your elements.
- Every time you make changes to your parallel and intercepting route, make sure to run `npm run dev` again.
- Use the `<Image />` component from 'next/image' to display an image. Do **NOT** use `<img>`. Here is the link to their documentation [https://nextjs.org/docs/app/api-reference/components/image].
- Make sure to replace the code inside your `next.config.ts` file with the code below. You need to do this so that you can use `<Image />` with the images provided by `jsonplaceholder.typicode.com`:

    ```js
    import type { NextConfig } from 'next'
     
    const config: NextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '**',
            search: '',
          },
        ],
      },
    }
     
    export default config
    ```

    You can read more about this in their [documentation](https://nextjs.org/docs/app/getting-started/images#remote-images).

## Resources

- For all photos: [https://jsonplaceholder.typicode.com/photos]
- For individual photos by id: [https://jsonplaceholder.typicode.com/photos/1]

---

*Congratulations on finishing React course! 🎉🎉🎉*

*It has been a pleasure being your instructor.*
