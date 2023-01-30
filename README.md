# TITLE: REACT NETFLIX CLONE

## Introduction:

Netflix is one of the world's major movie content streaming platforms, where you can watch unlimited movies and TV shows. This is a Netflix clone made with react,CSS,HTML, JavaScript and firebase. Movie data is asynchronously fetched from TMDB API which has over 30 thousand movies.

## Features

1. Has a home page which displays different gernes of movies and TV shows.
2. It also has separate pages for Movies and TV shows.
3. It includes a sign in and sign up feature.
4. Has a smooth card slider effect.


# CODE

## SetUP

- I first began by creating the main folder using `npx create-react-app <name>`
- Next I created two main folders (component and pages) to hold the components and pages as the names suggest.

### NavBar

The NavBar has two sections:
    - Primary Navigation
    - Secondary Naigation

The primary navbar contains limks to the various pages and the NEtflix Logo. Whereas the Secondary NavBar contains the search bar and the user's avatar. For the icons, I used Semantic UI.

I used the array map method to iterate through the array which had nested objects of the page name and the path name.

When you scroll down the background changes to black when the height is greater than 100.To achieve this I used the `scroll` event listener, the `useEffect ` hook and a `cleanup ` function. I used the `useState` hook to set the initial value to `false`.

Key feature I learnt : the scroll event listener


### Footer

My footer section has 4 main parts:
    - Social Media Links
    - Site Links
    - Service Code Button 
    - Copyright

Key feature I learnt here was `flex-wrap` which splits the items into multiple lines and `flex-basis` which determines the number of rows and colums


### Billboard

This was the key section for me because it's the centr piece of the application. I used axios to fetch data from the TMDB API to display different movie/series images on refresh. So the billboard has various parts:
    - The hero image - an image of the movie
    - The N series logo
    - The movie/series title
    - The play button and the more-info button

The main thing i learnt here was using axios instead of the normal fetch method. I installed the axios library by running `npm install axios` . For axios, I imported it from my local axios and not the global axios as it kept bringing an error

I used `Math.random` to generate random images for my hero section.

``` jsx
 useEffect(()=>{
    async function fetchMovieData(){
      const request = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=30d37017426bc7f99dc52b6e58ee8d63&with_networks=213");
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length -1)
        ]
      );
      return request
    }
    fetchMovieData()
  },[])

```
The other thing was the `truncate` function which checks the word length of the description.

```jsx

const truncate =(string,n)=>{
    return string?.length > n ? string.substr(0,n-1) + '...': string
  }

```
It trancates the words when the characters reach the given word length and replaces them with `...` . It has two parameters, the string and the number. The first question mark is there because some movies may lack descriptions so this eliminates the error.
This applies to the movie name as well which I've used an `or` condition to check for the movie title. This was because the titles in some objects came with different key names.

```jsx

<h1>{movie?.title || movie?.name || movie?.original_name}</h1>

```
  

### Rows

On the `Homescreen` component, I passed in the titles and fetch urls as props.  Then in the `Row` component, I rendered the titles. I created a state to hold the dynamic movie data. There is a scroll event to help with scrolling through each row.

The API key and the End points for the various movie and series categories are in the helpers folder in the `Request` component. I had to create an account on `TMDB` for me to get an API key for my app.


### Deployment

To deploy this application I used firebase. This is the link:
        https://netflix-clone-phase2-react.web.app


### IN PROGRESS
I'm currently working on the signup and sign in pages


### Support/ Contact Details:
- wanjikukimani24@gmail.com
- (+254) 0797493262

### License

Licenced under th MIT-license
