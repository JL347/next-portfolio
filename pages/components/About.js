import React from "react"
import Image from "next/image"
import headshot from "../../public/Headshot1.jpeg"

const About = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h2 className="text-xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hello, my name is Jared Lemke and I'm a Software Engineer!
          </h2>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Since graduating college with my Bachelors of Science in Information Technology and Administrative Management,
              I have been working in the recruiting and staffing field. I always felt that I wasn't being challenged enough
              and that I had a technical aptitude that I wasn't using so I decided to make a career change and find something
              that I was truly passionate about. That ended up being programming!
            </p>
            <p className="mb-4">
              While my title recently has been Software Engineer/Technical Recruiter, working in a startup culture has provided me the opportunity to work in a variety of roles.
              I have learned the term “wears multiple hats” very well to this point. As a Software Engineer with almost 3 years of experience,
              I've learned a great deal about what it takes to be a successful developer.
              While Frontend engineering, primarily React and JS, has been my bread and butter since I started my development career,
              I’ve also worked with Ruby on Rails in the Backend, done some UI/UX design work as well as customer support.
              A few things I’ve done regarding that are overhauling the entire color scheme of the platform,
              redesigning the main platform dashboard to better exploit the space and layout of the page, as well as repurposing the login page.
              I believe that because of what I’ve learned over the past 3 years that I have the strengths to be a competent developer whether that be in Engineering,
              UX or Customer Support. Recently, I've started a hybrid role where I handle a major portion of the day-to-day management and operations of the Development team.
              This responsibility includes performing 1:1’s with team members, acting as a "scrum master" for our daily engineering Trello board,
              and developing/leading new processes to scale the team.
              As mentioned, I've also been the Technical Recruiter the entirety of my tenure with my current company which adds to the already 6 years of recruiting experience I had before going to the coding bootcamp.
              I've become so used to wearing multiple hats and I value that experience because it's allowed me to learn and develop my skillset by touching so many aspects of the business.
              At this point in time, I'm looking for a new challenge that will help me grow in my development career.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={headshot}
            alt="Headshot"
            priority={true}
            className="rounded-lg"
            width={350}
            height={500}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default About;