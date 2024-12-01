"use client";
import React, { useState } from "react";
import Carousel from "../components/Carousel";
import useEmblaCarousel from "embla-carousel-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import KeenCarousel from "../components/KeenCarousel";
const buniImages = ["buni.jpeg", "sustain.jpeg", "me-garner.jpeg"];

const dfgImages = ["edf1.jpeg", "edf2.jpeg"];
const sctImages = ["sct1.jpeg", "sct2.jpeg"];
const sensorImages = ["level-sensor.jpeg", "level.png"];
const tocsImages = ["tocs.png"];
const carImages = ["gfr-car.jpeg", "gfr-estimation.png", "gfr-camera.png"];
const shnsuImages = ["shapensurf.gif"];

const trnImages = ["trn.png"];

const Projects = () => {
  return (
    <div className="self-end overflow-scroll h-5/6 w-7/12">
      <ul className="list-none">
        <div className="collapse bg-base-200 bg-transparent">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium ">
            2023-PRESENT \\ INDUSTRY \\{" "}
            <span className="text-3xl">SMART MFG. & INDUSTRY 4.0</span>
          </div>
          <div className="collapse-content w-full">
            <p>
              <strong>
                \+ Daimler Truck North America - Software Engineering & Cloud
                Architecture
              </strong>
            </p>
            <p>
              <br />
              <strong>Technical Lead</strong> of an application suite supporting
              various aspects of Operations and Manufacturing Engineering (ME)
              across 9 manufacturing. plants & corporate. This includes:
              <br /> <br />
              <ul className="list-disc">
                <li>
                  <strong>Quality Campaign Management:</strong> Tracks quality
                  campaign populations and serial fix statuses.
                </li>
                <li>
                  <strong>Training Progress Tracking:</strong> Monitors training
                  progress across teams, pools, and operating units.
                </li>
                <li>
                  <strong>Manufacturing Process Definition:</strong> Defines
                  part and operation specifications for manufacturing new parts.
                </li>
                <li>
                  <strong>Offline Quality Analysis:</strong> Analyzes quality
                  data offline.
                </li>
                <li>
                  <strong>Inventory Management and Simulation:</strong> Compares
                  part number requirements with on-hand and
                  waiting-to-be-unloaded inventory for production sequences.
                </li>
                <li>
                  <strong>Torque Quality and Auditability:</strong> Provides a
                  digital record of tool associations to improve torque quality
                  and ensure auditability across plants.
                </li>
                <li>
                  <strong>Project and Resource Management:</strong> Manages
                  project members, budgets, and calendar events for internal
                  operations.
                </li>
              </ul>
              <br />
              <strong>Cloud Data Architect</strong> for the Smart Manufacturing
              and Industry 4.0 data extraction solution of 9 manufacturing
              plants producing over 200,000 trucks annually.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className="collapse bg-base-200 bg-transparent">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2022-PRESENT \\ VOLUNTEER \\ {""}
            <span className="text-3xl">DEVELOP FOR GOOD</span>
          </div>
          <div className="collapse-content">
            <p>
              <a
                href="https://www.developforgood.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline"
              >
                Develop For Good
              </a>{" "}
              is a Bay Area based non-profit originating out of Stanford
              University. The organization connects traditionally unrepresented
              college students interested in programming and design with
              nonprofits to create socially impactful digital tools. <br />
              <br />
            </p>
            <p>
              <strong>
                \+ Winter 24/25 Cohort - Product Lead - Dreams For School &
                CHANGE Arts
              </strong>
              <br />
            </p>
            <p>
              in progress... <br />
              <br />
            </p>
            <p>
              <strong>
                \+ Summer 24 Cohort - Product Lead - Ashoka & The Make Cents
                Foundation
              </strong>
              <br />
            </p>
            <p>
              The first project involved developing a system to update
              Ashoka&apos;s profiles of social entrepreneurs (Fellows) using
              data from websites, social media, and voice bots. This system
              would enhance Ashoka&apos;s ability to identify synergies, improve
              the selection process, and foster impactful collaborations that
              could drive large-scale social change.
              <br />
              <br />
              The second project focused on creating a financial literacy app
              for low-income communities, providing tools to help individuals
              with budgeting, saving, and investing. The app aimed to increase
              financial literacy, promote better financial decision-making, and
              improve economic resilience, particularly for underserved
              populations like young adults and immigrants.
              <br />
              <br />
            </p>
            <p>
              <strong>
                \+ Winter 2023/24 Cohort - Product Manager - XtraMath
              </strong>
              <br />
            </p>
            <p>
              XtraMath&apos;s mission is to make the tools for learning math
              available to everyone. Our vision is universal numeracy, half of
              UN Sustainable Development Goal 4.6 It is used by over 6.5 million
              students every year for daily math practice. As the Product
              Manager, I helped spearhead the creation of a Amazon Redshift and
              Glue DataWarehouse solution to aid in the nonprofit&apos;s
              reporting and integration needs of a growing business. <br />
              <br />
            </p>
            <p>
              <strong>
                \+ Winter 2021/2022 Cohort - Engineer - Environmental Defense
                Fund
              </strong>
              <br />
            </p>
            <p>
              The Environmental Defense Fund (EDF) is a global nonprofit aimed
              at tacking climate change. The EDF identified an issue with a lack
              of response to environmental and pollution hazards due to a
              inaccessibility in reporting these hazards. I worked as a
              full-stack engineer to develop a ReactJS/Flask application to
              properly report these issues.
            </p>
            <br />
            <br />
            <KeenCarousel images={dfgImages} />
          </div>
        </div>
        <div className="collapse bg-base-200 bg-transparent">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium ">
            2021-2024 \\ PASSION PROJECT \\{" "}
            <span className="text-3xl">BUNI SURFBOARD COMPANY</span>
          </div>
          <div className="collapse-content w-full">
            <p>
              <strong>\+ BUNI</strong>
            </p>
            <p>noun [U] buh • nee</p>
            <p>
              A wild, provocative, arguably dumb experiment of thought and
              action. An eco-focused surfboard manufacturing company I
              co-founded in the summer of 2021. Starting from nothing more than
              a simple idea, we have grown to a team of 10, with two factories
              in Oregon, and are on track to do over $50,000 in revenue this
              year. <br /> <br />
            </p>
            <p>
              I was able to integrate my technical expertise into the company by
              standing up an award-winning, full-stack e-commerce website. The
              beta versions features an interactive 3D surfboard designer where
              users can customize and design their own boards. The production
              version of the site can be found here:{" "}
              <a
                className="text-sky-600 underline"
                href="https://www.buniboards.com"
                target="blank"
              >
                www.buniboards.com
              </a>{" "}
              <br />
              <br />
            </p>
            <p>
              I have been fortunate enough to manage all aspects of the company.
              This includes:
            </p>
            <ul className="list-disc">
              <li>Daily Operations</li>
              <li>Marketing</li>
              <li>Finance</li>
              <li>Business Logistics</li>
              <li>Supply Chain Management</li>
              <li>Legal</li>
            </ul>
            <br />
            <br />
            <KeenCarousel images={buniImages} />
          </div>
        </div>
        <div className="collapse bg-base-200 bg-transparent">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2023 \\ INDUSTRY \\{" "}
            <span className="text-3xl">SAFETY CRITICAL TOOLING</span>
          </div>
          <div className="collapse-content">
            <p>
              <strong>
                \+ Daimler Truck North America - Software Engineering
              </strong>
            </p>
            <p>
              This project exists as a request from Design Engineering for a
              centralized way to track safety critical tools. Due to quality
              issues, recalls, and Corporate Audits, modules the are critical to
              the safety of the vehicle (ex. Brakes, Steering, Power- net) are
              denoted “DS” or Safety Critical. The most important of these is
              Torque. This is because many of the safety-related recall issues
              stem from torque problems such as improper torque, mis-builds, or
              loose/missing fasteners.
              <br />
              <br />
            </p>
            <p>
              As a result of this issue, I designed and implemented a full-stack
              React/.NET 8 Web Application with CRUD operations and user
              authentication and authorization.
              <br />
              <br />
            </p>
            <KeenCarousel images={sctImages} />
          </div>
        </div>
        <div className="collapse bg-base-200 bg-transparent">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2023 \\ INDUSTRY \\{" "}
            <span className="text-3xl">LEVEL SENSOR INTEGRATION</span>
          </div>
          <div className="collapse-content">
            <p>
              <strong>
                \+ Daimler Truck North America - Controls & Automation
                Engineering
              </strong>
            </p>
            <p>
              On our manufacturing floor, there are a collection of totes with
              various fluids. This includes power steering fluid, oil,
              transmission fluid, and other liquids the trucks require to
              operate. Before this project, there was no way to tell the current
              level of these totes. Operators would only find out when they went
              to dispense the respective fluid, and nothing would come out.
              <br />
              <br />
            </p>
            <p>
              Initially, I was given a Keyence FL series level sensor to take to
              my team’s lab and develop a proof of concept. Once that was
              completed, I worked with maintenance technicians at the plant to
              get the probe cut to the size of a power steering fluid tote and
              then installed. After that, I integrated the sensor into the
              plant&apos;s automation network and SCADA system that the
              control’s engineering team uses and created a live pop-up that
              displays the level and presents a trend graph of the tote’s level
              history. If it gets too low, an alarm is triggered, and the proper
              point of contacts receive an email letting them know.
            </p>
            <br />
            <br />
            <KeenCarousel images={sensorImages} />
          </div>
        </div>
        {/* <div className="collapse bg-base-200 bg-transparent">
                <input type="checkbox"  /> 
                <div className="collapse-title text-xl font-medium">
                2023 \\ INDUSTRY \\ <span className='text-3xl'>ADX POWERBI CLOUD REPORTING</span>
                </div>
                <div className="collapse-content"> 
                <p><strong>\+ Daimler Truck North America - Business Intelligence & Cloud Architecture</strong></p>
                <p>
                    
                </p>
                </div>
            </div> */}
        <div className="collapse bg-base-200 bg-transparent">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2021-2023 \\ INDUSTRY \\ <span className="text-3xl">ODOT TOCS</span>
          </div>
          <div className="collapse-content">
            <p>
              <strong>
                \+ Oregon State University - Oregon Department of Transportation
                (ODOT) - Developer
              </strong>
            </p>
            <p>
              Led a team of 5 student developers through a 2 year redevelopment
              of ODOT&apos;s Transportation Operations Center System (TOCS). The
              goal of the application was to providing a single, regional point
              of contact for 24x7 monitoring of transportation system operations
              and coordination of transportation related communications and
              services among internal and external customers. <br />
              <br /> Additionally, TOCS is able to:
            </p>
            <ul className="list-disc">
              <li>
                Enhance ODOT field crew safety during remote tasks, reducing
                incident duration and improving response times.
              </li>
              <li>
                Manage information and communication functions, dispatching for
                maintenance and coordinating with emergency services.
              </li>
              <li>
                Provide accurate traveler information through systems like
                TripCheck and 511, and promptly notify the public of impactful
                events.
              </li>
              <li>
                Maintain readiness, document activities, manage contacts, and
                offer operational support through intelligent tools for field
                operations.
              </li>
            </ul>
            <p>
              <br /> We were able to successfully decouple the legacy
              application&apos;s monolithic architecture and leverage
              microservices, enhancing system scalability and reduce downtime by
              50%. This was done through a tech stack of .NET6, .NET Framework
              4.8, Apache ActiveMQ, SignalR, and GraphQL. The front-end was
              completely redesigned and implemented in VueJS, TypeScript,
              GoldenLayout, and AG Grid. This immensely improved application
              usability and functionality.
            </p>
            <br />
            <br />
            <KeenCarousel images={tocsImages} />
          </div>
        </div>
        <div className="collapse bg-base-200 bg-transparent">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2023 \\ RESEARCH \\{" "}
            <span className="text-3xl">
              AUTONOMOUS CAR TRAJECTORY & CONTROL
            </span>
          </div>
          <div className="collapse-content">
            <p>
              <strong>\+ GFR - Autonomous Systems Engineering</strong>
            </p>
            <p>
              Global Formula Racing is a partnership between Oregon State
              University and the Duale Hochschule Baden-Wurttemberg Ravensburg.
              Each year the team designs and manufactures two high performance
              electric formula style vehicles, to compete in Formula SAE in
              North America and Formula Student in Europe.
              <br />
              <br />
              I was responsible for the optimization of the Trajectory Planning
              and Control subsystem on the autonomous vehicle. The subsystem
              involves the development of algorithms that take into account the
              car&apos;s current position, velocity, and orientation, as well as
              the track layout. The trajectory planning component of this
              subsystem determines the path the car should follow. The control
              component of the subsystem is responsible for executing the
              planned trajectory by adjusting the steering angle and speed in
              real-time. The goal of the control component is to maintain
              minimum deviation of the reference trajectory while achieving
              maximum speed with respect to minimum lap time.
              <br />
              <br />
              Through development in ROS, C++, YoloV4, and ForcesPro, I was able
              to design and implement several controls algorithims and improve
              lap time by 50%.
            </p>
            <br />
            <br />
            <KeenCarousel images={carImages} />
          </div>
        </div>
        <div className="collapse bg-base-200 bg-transparent">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2022 \\ CLASS PROJECT \\{" "}
            <span className="text-3xl">SHAPE N&apos; SURF</span>
          </div>
          <div className="collapse-content">
            Buni Shape n&apos; Surf exists as the all-in-one suite for Surfboard
            Builders. Users are able to select and save surf spots around the
            world through the Google Maps API, then either view a real-time surf
            forecast, lookahead into the upcoming month, or view the last
            year&apos;s worth of surf data—all through the Open-Meteo Marine
            Weather API. For the surfboard shaping side of the application, if a
            user finds a surfboard they would like to recreate they can visit
            the &quot;Shape Board&quot; page where they can either take a
            picture of a board or upload it from their phone. A TensorFlow Lite
            Machine Learning Model was trained by our team for surfboard image
            recognition. If it really was a board that the user took a picture
            of, the user can then enter the size of the board they would like.
            Our OpenCV implementation finds the outline of the board, splits it
            in half, and divides it into slices that fit on a standard
            8.5&quot;x11&quot; piece of paper. From there, the user can save the
            board and print the pdf generated by ITextPdf. Just like that, the
            user is ready to make a surfboard!
            <br />
            <br />
            <KeenCarousel images={shnsuImages} />
          </div>
        </div>
        <div className="collapse bg-base-200 bg-transparent">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2022 \\ INDUSTRY \\{" "}
            <span className="text-3xl">TOOL READINESS NEXT</span>
          </div>
          <div className="collapse-content">
            <p>
              <strong>
                \+ Thermo Fisher Scientific - Software Engineering
              </strong>
            </p>
            <p>
              Tool Readiness exists to align and calibrate the microscope and to
              ensure it provides high resolution images and accurate metrology.
              With the constantly evolving needs of consumers, software
              engineering philosopies, and the current state of techonology, TR
              Next was needed as a replacement to the existing TR. With it comes
              a set of services and a comprehensive, easy to use User Interface.
              I was responsible for creating most of the pages on our web
              application, along with the logic behind it. The tech stack for
              the appliation was .NET6, Blazor, and gRPC. <br />
              <br />
            </p>
            <br />
            <br />
            <KeenCarousel images={trnImages} />
          </div>
        </div>
      </ul>
    </div>
  );
};
export default Projects;
