import MPXLogo from '../assets/project_images/mpx/mpxlog.png';
import TwoBitAdder from '../assets/project_images/2bitadder/2bitcircuit.png';
import MPXView from "../assets/project_images/mpx/mpxstart.png";
import SRPic from "../assets/project_images/SRPic/sr.png";
import BenEater6502 from "../assets/project_images/6502computer/6502.png";

export const ProjectList = [
    {
        name: 'MPX',
        image: MPXLogo,
        image2: MPXView,
        skills: "C, Git, GDB Debugger",
        link: "https://github.com/Cgrubick/SImple-OS",
        description: "This semester long project consisted of creating a from-scratch operating system with a basic kernel. The OS was a basic CLI this consisted of creating infrastructure for process management,c reating functions for basic memory management, as well as allowing the OS to interleave process execution. For a detailed look at my code check out my Github!"
    },
    {
        name: 'Two Bit Adder Circuit',
        image: TwoBitAdder,
        skills: "Breadboarding, LTSpice",
        link: "https://github.com/Cgrubick/2BitAdder",
        description: "This adder circuit was part of a larger final project in EE 252, in which we had to design a basic calculator which could add,subtract, decrement and increment. In order to do this I first worked on creating a LTSpice diagram for a basic two bit adder. After creating the schematic I created a basic truth table of the circuit to check that it correctly added. Once this was done I used a variety of logic gate IC's to assemble this to a breadboard."
    },
    {
        name: 'Special Relativity in Rust',
        image: SRPic,
        skills: "Rust, Unit Testing, Modern Physics",
        link: "https://github.com/Cgrubick/SpecialRelativityRust",
        description: "A little project I put together to better understand time dilation and Special Relativity for my Modern Physics class."
    },
    {
        name: '6502 Ben Eater Computer',
        image: BenEater6502,
        skills: "Circuit Analysis, Breadboarding, Computer Architecture, Assembly",
        description: "This project I did follows along with Ben Eaters series on the 6502 CPU which focuses on creating a basic computer from a 6502 processor along with several other ICs for RAM, ROM and interfacing with the LCD display."
    }

    

]