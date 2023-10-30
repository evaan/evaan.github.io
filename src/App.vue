<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-4/5">
    <div>
      <p class="text-4.5xl leading-tight" id="header">Evan</p>
      <p class="text-xl mb-2">Student at Memorial University</p>
      <div class="box pb-4 p-2">
        <p class="text-3.5xl mb-1">About me</p>
        <p class="leading-relaxed">
          Hi, I'm Evan. I am currently a first year student at Memorial University of Newfoundland, studying computer science.
          I am also a member on the software team of <a href="https://easternedgerobotics.com" target="_blank">Eastern Edge Robotics</a>.<br/>
          Currently, I am learning C++ and React!
        </p>
      </div>
      <div class="box pb-4 px-2">
        <p class="text-3.5xl mb-1">Skills</p>
        <p class="text-xl mb-1 justify-center items-center flex">
          <box-icon name="code-alt" class="h-5 inline pr-1.5"/>
          Java, TypeScript, Python
        </p>
        <p class="text-xl mb-1 justify-center items-center flex">
          <box-icon name="globe" class="h-5 inline pr-1.5"/>
          HTML, CSS, JavaScript
        </p>
        <p class="text-xl mb-1 justify-center items-center flex">
          <box-icon name="desktop" class="h-5 inline pr-1.5"/>
          Linux, Docker, ROS2
        </p>
      </div>
      <div class="box pb-4 px-2">
        <p class="text-3.5xl mb-1">Contacts</p>
        <p class="text-xl mb-1 justify-center items-center flex">
          <box-icon name="github" type="logo" class="h-5 inline pr-1.5"/>
          <a href="https://github.com/evaan" target="_blank">GitHub</a>
        </p>
        <p class="text-xl mb-1 justify-center items-center flex">
          <box-icon name="linkedin" type="logo" class="h-5 inline pr-1.5" />
          <a href="https://linkedin.com/in/evan-whelan-" target="_blank">LinkedIn</a>
        </p>
        <p class="text-xl mb-1 justify-center items-center flex">
          <box-icon name="discord-alt" type="logo" class="h-5 inline pr-1.5" />
          <a class="no-underline">gamingrnrs</a>
        </p>
      </div>
    </div>
    <div>
      <p class="text-4.5xl leading-tight">Projects</p>
      <p class="text-xl mb-2">A full list of projects can be found <a href="https://github.com/evaan?tab=repositories" target="_blank">here</a>.</p>
      <div class="box pb-4 px-2">
        <p class="text-3.5xl mb-1 justify-center items-center flex">
          <p class="pr-2">
            Eastern Edge Website
          </p>
          <v-icon name="si-astro" class="h-7 w-7"/>
          <box-icon name="vuejs" type="logo" class="h-7 w-7"/>
          <box-icon name="tailwind-css" type="logo" class="h-7 w-7"/>
          <box-icon name="html5" type="logo" class="h-7 w-7"/>
        </p>
        <p class="leading-relaxed">
          Currently assisting in rewriting the Eastern Edge website in Astro.
        </p>
        <p class="text-2.5xl justify-center items-center flex">
          <box-icon name="link" class="h-10 w-10 pr-2"/>
          <a href="https://easternedgerobotics.com" target="_blank">EasternEdgeRobotics.com</a>
        </p>
      </div>
      <div class="box pb-4 px-2">
        <p class="text-3.5xl mb-1 justify-center items-center flex">
          <p class="pr-2">
            Eastern Edge 2024
          </p>
          <box-icon name='react' type='logo' class="h-7 w-7"/>
          <box-icon name="typescript" type="logo" class="h-7 w-7"/>
          <v-icon name="si-ros" class="h-7 w-7" />
          <box-icon name="html5" type="logo" class="h-7 w-7"/>
        </p>
        <p class="leading-relaxed">
          Currently, I am a software team member and GUI lead for Eastern Edge.
          The software will be used for the ROV competing in the 2024 
          <a href="https://materovcompetition.org" target="_blank">MATE ROV Competition</a> 
          in Kingsport, TN next June!
        </p>
        <p class="text-2.5xl justify-center items-center flex">
          <box-icon name="github" type="logo" class="h-10 w-10 pr-2"/>
          <a href="https://github.com/easternedgerobotics" target="_blank">EasternEdgeRobotics</a>
        </p>
      </div>
      <div class="box pb-4 px-2">
        <p class="text-3.5xl mb-1 justify-center items-center flex">
          <p class="pr-2">
            Husky Explorer 2023
          </p>
          <box-icon name="javascript" type="logo" class="h-7 w-7"/>
          <box-icon name="c-plus-plus" type="logo" class="h-7 w-7"/>
          <box-icon name="python" type="logo" class="h-7 w-7"/>
          <box-icon name="html5" type="logo" class="h-7 w-7"/>
          <box-icon name="tux" type="logo" class="h-7 w-7" />
        </p>
        <p class="leading-relaxed">
          The Husky Explorer competed in the 2023 Mate ROV World Championship that took place in Longmont, CO in June of 2023.
          The repository contains all of the code used by Husky Explorer that year, including the software control system, and the vertical profiling float.
        </p>
        <p class="text-2.5xl justify-center items-center flex">
          <box-icon name="github" type="logo" class="h-10 w-10 pr-2"/>
          <a href="https://github.com/evaan/HuskyExplorer2023" target="_blank">evaan/HuskyExplorer2023</a>
        </p>
      </div>
    </div>
  </div>
</template>