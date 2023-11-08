<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto w-11/12 lg:w-5/6">
        <div>
            <p class="text-2.5rem leading-tight" id="header">Evan</p>
            <p class="text-xl mb-2">Student at Memorial University</p>
            <div class="box">
                <p class="text-2rem mb-1">About Me</p>
                <p class="leading-relaxed">
                    Hi, I'm Evan. I am a first year student at Memorial University of Newfoundland, studying computer science.
                    I am also a member on the software team of <a href="https://easternedgerobotics.com" target="_blank">Eastern Edge Robotics</a>.
                    Currently, I am learning C++ and React!
                </p>
            </div>
            <div class="box">
            <p class="text-2rem mb-1">Skills</p>
                <p class="text-xl mb-1">
                    <v-icon name="hi-solid-code" class="h-6 w-6" />
                    Java, TypeScript, Python
                </p>
                <p class="text-xl mb-1">
                    <v-icon name="hi-solid-globe-alt" class="h-6 w-6" />
                    HTML, CSS, JavaScript, React
                </p>
                <p class="text-xl mb-1">
                    <v-icon name="md-monitor-round" class="h-6 w-6" />
                    Linux, Docker, ROS 2
                </p>
            </div>
            <div class="box">
                <p class="text-2rem mb-1">Contacts</p>
                <p class="text-xl mb-1">
                    <v-icon name="si-github" class="h-6 w-6" />
                    <a href="https://github.com/evaan" target="_blank" class="ml-2">GitHub</a>
                </p>
                <p class="text-xl mb-1">
                    <v-icon name="si-linkedin" class="h-6 w-6" />
                    <a href="https://www.linkedin.com/in/evan-whelan-/" target="_blank" class="ml-2">LinkedIn</a>
                </p>
                <p class="text-xl mb-1">
                    <v-icon name="si-discord" class="h-6 w-6" />
                    <span class="text-fuchsia-400 ml-2">gamingrnrs</span>
                </p>
            </div>
        </div>
        <div>
            <p class="text-2.5rem leading-tight">Projects</p>
            <p class="text-xl mb-2">A full list of projects can be found <a href="https://github.com/evaan?tab=repositories" target="_blank">here</a>.</p>
            <div class="box">
                <p class="text-2rem mb-1">
                    Homelab
                    <v-icon name="si-proxmox" class="h-8 w-8 mb-1" />
                    <v-icon name="si-truenas" class="h-8 w-8 mb-1" />
                    <v-icon name="si-docker" class="h-8 w-8 mb-1" />
                    <v-icon name="si-homeassistant" class="h-8 w-8 mb-1" />
                    <v-icon name="si-debian" class="h-8 w-8 mb-1" />
                </p>
                <p class="leading-relaxed">
                    A homelab which uses Proxmox that I run as a hobby. The VMs in Proxmox include TrueNAS Core, Debian with Docker containers, and Home Assistant OS.
                </p>
            </div>
            <div class="box">
                <p class="text-2rem mb-1">
                    Eastern Edge 2024
                    <v-icon name="si-typescript" class="h-8 w-8 mb-1" />
                    <v-icon name="si-react" class="h-8 w-8 mb-1" />
                    <v-icon name="si-python" class="h-8 w-8 mb-1" />
                </p>
                <p class="leading-relaxed">
                    Currently, I am a software team member and GUI lead for Eastern Edge.
                    The software will be used for the ROV competing in the 2024 
                    <a href="https://materovcompetition.org" target="_blank">MATE ROV Competition</a> 
                    in Kingsport, TN next June!
                </p>
                <p class="text-xl xl:text-1.75rem mb-1">
                    <v-icon name="si-github" class="xl:h-8 xl:w-8 h-6 w-6 mb-0.5" />
                    <a href="https://github.com/easternedgerobotics" target="_blank" class="ml-2">EasternEdgeRobotics</a>
                </p>
            </div>
            <div class="box">
                <p class="text-2rem mb-1">
                    Eastern Edge Website
                    <v-icon name="si-react" class="h-8 w-8 mb-1" />
                    <v-icon name="si-astro" class="h-8 w-8 mb-1" />
                    <v-icon name="si-tailwindcss" class="h-8 w-8 mb-1" />
                </p>
                <p class="leading-relaxed">
                    Assisting in rewriting the Eastern Edge website using Astro, React, and Tailwind CSS.
                </p>
                <p class="text-xl xl:text-1.75rem mb-1">
                    <v-icon name="hi-link" class="xl:h-7 xl:w-7 h-5 w-5 mb-0.5" />
                    <a href="https://easternedgerobotics.com" target="_blank" class="ml-2">EasternEdgeRobotics.com</a>
                </p>
            </div>
            <div class="box">
                <p class="text-2rem mb-1">
                    Husky Explorer 2023
                    <v-icon name="si-javascript" class="h-8 w-8 mb-1" />
                    <v-icon name="si-cplusplus" class="h-8 w-8 mb-1" />
                    <v-icon name="si-python" class="h-8 w-8 mb-1" />
                    <v-icon name="si-linux" class="h-8 w-8 mb-1" />
                </p>
                <p class="leading-relaxed">
                    The Husky Explorer competed in the 2023 Mate ROV World Championship that took place in Longmont, CO in June of 2023.
                    The repository contains all of the code used by Husky Explorer that year, including the software control system, and the vertical profiling float.
                </p>
                <p class="text-xl xl:text-1.75rem mb-1">
                    <i class="inline-flex align-middle"><v-icon name="si-github" class="xl:h-8 xl:w-8 h-6 w-6 mb-0.5" /></i>
                    <a href="https://github.com/evaan/HuskyExplorer2023" target="_blank" class="ml-2">evaan/HuskyExplorer2023</a>
                </p>
            </div>
        </div>
    </div>
</template>