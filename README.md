<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/yiremorlans/rendervous">
    <img src="https://github.com/yiremorlans/rendervous/blob/main/public/imgs/render-icon.png" alt="rendervous logo" width="50" height="50">
  </a>

<h3 align="center">rendervous</h3>

  <p align="center">
    A social network showcase of digital art generated by AI.
    <br />
    <a href="https://github.com/yiremorlans/rendervous"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rendervous-production.up.railway.app/">View Demo</a>
    ·
    <a href="https://github.com/yiremorlans/rendervous/issues">Report Bug</a>
    ·
    <a href="https://github.com/yiremorlans/rendervous/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#optimizations">Optimizations</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
  <img src="https://github.com/yiremorlans/rendervous/blob/main/public/imgs/render-landing.png" alt="rendervous landing page" width="400px"/>
</div>

<br>
Rendervous is a social media platform for people who appreciate, enjoy, or create AI art. The artwork on rendervous is generated by artificial intelligence and includes a wide range of styles, from realistic to abstract. Share your creations in one place with friends and the rest of the world - without any restrictions. Whether you're an artist who wants to showcase their AI infused artwork to a global audience receive feedback, or a fan who simply wants to follow what's happening in this field, rendervous is a platform where everyone can participate. 



### Built With

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) 

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![DaisyUI](https://img.shields.io/badge/DaisyUI-610cf5.svg?style=for-the-badge&logo=DaisyUI&logoColor=white) 
![EJS](https://img.shields.io/badge/ejs-%234ea94b.svg?style=for-the-badge&logo=ejs&logoColor=white) 



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get the project running on your local machine, you will need Node.js and the following installation guide to get started.

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Sign up for your own non-relational document database at [https://www.mongodb.com/](MongoDB)
2. Sign up for digital asset management at [https://cloudinary.com/](Cloudinary)
3. Clone the repo
   ```sh
   git clone https://github.com/yiremorlans/rendervous.git
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your port, database string, and API keys in `config.js` or `.env` file
   ```sh
    PORT = 2121 (can be any port example: 3000)
    DB_STRING = `your database URI`
    CLOUD_NAME = `your cloudinary cloud name`
    API_KEY = `your cloudinary api key`
    API_SECRET = `your cloudinary api secret`
   ```
6. Run in development environment || run the app on localhost:YOURPORT
    ```sh 
    npm run dev
    ```
    ```sh
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

<img src="https://github.com/yiremorlans/rendervous/blob/main/public/imgs/render-profile.png" alt="profile page" width="300px"/>
<img src="https://github.com/yiremorlans/rendervous/blob/main/public/imgs/render-post.png" alt="create a post page" width="300px"/>

 - Sign up to get started. 
 - Browse, like, and comment on the art within the community or upload your own AI creations
 - Popular AI art generators to explore :
 * [Dall-E 2](https://openai.com/dall-e-2/)
 * [Stability AI](https://beta.dreamstudio.ai)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add like and delete feature to comments
- [ ] Add notifications to new posts in the feed
- [ ] Add friend feature
    - [ ] friend list featured at top of profile 

See the [open issues](https://github.com/yiremorlans/rendervous/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations
 
Notifications for new comments left on user post is currently in developement, as well as notifications to new posts by friends will be implemented in the near future as well. Planned future optimizations include ongoing improvements to the user interface and navigation. Users will be able to add friends to their profile, which will allow them to view all the posts specific to their friends. 

## Lessons Learned

I knew I wanted to incorporate an MVC structure to maintain organization during development but also to allow future improvements and features to be implemented post-production of rendervous. New features can eaasily be worked into a new or exisiting model (thanks mongoose), followed by logic and data retrieval within the controllers to then routing and paths be configured accordingly. 

It was important to me to have a robust code base that would fascilitate incorporating new features, but also modularity so that the views could be swapped out to integrate a different front-end library, like React. TailwindCSS + DaisyUI combination offered components and additional UI support I had envisioned for a clean aesthetic and user friendly experience as part of rendervous' core features. 

A good portion involved using package libraries' respective documentation to troubleshoot issues encountered along the way, like method-override to send put requests through forms making rendervous a RESTful application. 

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Yire Morlans - [@xenaaMorph](https://twitter.com/xenaaMorph)

Project Link: [rendervous](https://rendervous-production.up.railway.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/yiremorlans/rendervous.svg?style=for-the-badge
[contributors-url]: https://github.com/yiremorlans/rendervous/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yiremorlans/rendervous.svg?style=for-the-badge
[forks-url]: https://github.com/yiremorlans/rendervous/network/members
[stars-shield]: https://img.shields.io/github/stars/yiremorlans/rendervous.svg?style=for-the-badge
[stars-url]: https://github.com/yiremorlans/rendervous/stargazers
[issues-shield]: https://img.shields.io/github/issues/yiremorlans/rendervous.svg?style=for-the-badge
[issues-url]: https://github.com/yiremorlans/rendervous/issues
[license-shield]: https://img.shields.io/github/license/yiremorlans/rendervous.svg?style=for-the-badge
[license-url]: https://github.com/yiremorlans/rendervous/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/yiremorlans
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 




