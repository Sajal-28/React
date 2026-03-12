import React from 'react'
import Card from './components/Card.jsx'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/4MBvClgfV5NmkmIofX1ubWajKvxAW1UEqTXj3cvUcMs/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/a2V5d2VvLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/OS9EaXNlbm8tc2lu/LXRpdHVsby05LnBu/Zw",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/0FawVlNbtx3EK470Qtyj9MII7XRWNXCwDeOMEd92iPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I2LzZk/L2Q0L2I2NmRkNGY0/MDY0ZTUzYmNlNzQ4/ZWZhMzQ4ZDcwMTEw/LmpwZw",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/6mt-yZhDq2qbTgKnCdL2WmJ4Xrf1iFKYWBT-hORuk-0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTEvTWV0YS1FbWJs/ZW0tNzAweDM5NC5w/bmc",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/_8UzA7sgv9a3yVaKb59oWy37WpCqzWNHMvUKyAJS89M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2Lzg1LzczLzIw/LzM2MF9GXzE2ODU3/MzIwNzZfVWQ4R05E/SU5aenBGMUR6WkFi/VVpkZldQbnBOVjBt/SjMuanBn",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/dHHKzD_W6w2UvQmyJxAmzKlnlxqDwGtaZt37V0ZDRlY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b193ZWJwLHFfZ2xv/c3N5LHJldF9pbWcs/d183MDAsaF80MDAv/aHR0cDovL2Fzc2V0/cy5kZXNpZ25oaWxs/LmNvbS9kZXNpZ24t/YmxvZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMi81Lmpw/Zw",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wYqNxLGRzAuE8359cHbwwO8nFJzwMC4KEFRf9pvPuT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/MzM5Lzk2Mi9zbWFs/bC9taWNyb3NvZnQt/aWNvbi1sb2dvLXN5/bWJvbC1mcmVlLXBu/Zy5wbmc",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Azure Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/17Z08VaemRypEXW6ZoaC2OUFu3e5iT08tP7EURsEw9Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BZG9i/ZS1Mb2dvLUhpc3Rv/cnktNC0xMjAweDc1/MC5wbmc",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/F5OTIiXQsj1Oyc_QZ1Pcf1XFN1HfraeROF6QZqwmMHw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvLndp/bmUuc3Zn",
    companyName: "Tesla",
    datePosted: "8 weeks ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/LtJOT-Kmeit4WyKjnIw8GrrXp8HB0BHMmDdr9Dj3KTU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy91/YmVyLXRleHQtd29y/ZC1sb2dvLWltYWdl/LXBuZy03MDE3NTE2/OTQ3MDcyMjZidGVk/bHE2bGczLnBuZz92/PTIwMjYwMzAxMjE",
    companyName: "Uber",
    datePosted: "9 days ago",
    post: "Mobile Engineer (Android)",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hour",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/SjC_YImbhGhloF9WDfJVOQ2o4vwg1AjDjz1tZEiYTEQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/aGlzdG9yeS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDkvQWlyYm5iLUxv/Z28ucG5n",
    companyName: "Airbnb",
    datePosted: "12 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$72/hour",
    location: "Remote, India"
  }
];

  console.log(jobOpenings);
  

  return (
    <div className='parent'>
        {jobOpenings.map(function(elem, idx) {

          return <div key={idx}>
            <Card company={elem.companyName} brandLogo={elem.brandLogo} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          </div>
        })}
    </div>
  )
}

export default App
