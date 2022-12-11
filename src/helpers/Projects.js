import MPXLogo from '../assets/project_images/mpx/mpxlog.png';
import TwoBitAdder from '../assets/project_images/2bitadder/2bitcircuit.png';


export const ProjectList = [
    {
        name: 'MPX',
        image: MPXLogo,
        skills: "C, Git, GDB Debugger",
        link: "https://github.com/Cgrubick/SImple-OS",
        description: "This is a description of a project"
    },
    {
        name: 'Two Bit Adder Circuit',
        image: TwoBitAdder,
        skills: "Breadboarding, LTSpice",
        link: "https://github.com/Cgrubick/2BitAdder",
        description: "About this project: This adder circuit was part of a larger final project in EE 252, in which we had to design a basic calculator which could add,subtract, decrement and increment. In order to do this I first worked on creating a LTSpice diagram for a basic two bit adder. After creating the schematic I created a basic truth table of the circuit to check that it correctly added. Once this was done I used a variety of logic gate IC's to assemble this to a breadboard."
    }

]