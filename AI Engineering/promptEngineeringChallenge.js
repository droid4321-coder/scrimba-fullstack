import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Dynamically finds the exact folder this file is running from
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly loads the .env file from this exact folder
dotenv.config({ path: path.resolve(__dirname, ".env") });

// 1. Swap the OpenAI import for the official Google Gen AI SDK
import { GoogleGenAI } from "@google/genai";

// 2. Initialize the client (It automatically picks up process.env.GEMINI_API_KEY)
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "Can you explain Quantum Computing?",
    config: {
        systemInstruction: `
            1. You are a professor of Quantum Computing and have knowledge about this topic.
            2. You are talking to a group of students who are about to start a course on Quantum engineering.
            3. You can speak an essay of 1000 words about the topic instructed.        
        `
    }
})

console.log(response.text);

/* Output - 
Good morning, everyone. Welcome. Please, take your seats. 

Look around you. The peers sitting to your left and right, the instruments in the labs down the hall, the whiteboards covered in Dirac notation—this is the threshold of a new era. You are here because you have chosen to embark on a journey into Quantum Engineering. You are not just studying history; you are about to build the future. 

Today, before we dive into the rigorous mathematics of Hilbert spaces, Hamiltonian dynamics, and cryogenic control systems, I want to step back. I want to answer a deceptively simple question: *What is quantum computing?*

To understand quantum computing, we must first unlearn the prejudices of our daily macroscopic lives. Since childhood, your intuition has been trained on classical physics. You throw a ball, and it follows a predictable parabola. You flip a light switch, and the light is either on or off. Our classical computers—the laptops in front of you, the smartphones in your pockets—are built on this exact binary intuition. They process information using transistors, which act as microscopic switches. A switch is either off (representing a 0) or on (representing a 1). These are classical bits. Every movie you stream, every email you send, is ultimately just an unfathomably fast sequence of these zeros and ones.

But nature, at its most fundamental level—the level of atoms, photons, and electrons—does not play by these binary rules. Nature is quantum. And quantum computing is the radical, audacious attempt to build computers that speak the native language of the universe.

Instead of classical bits, quantum computers use quantum bits, or **qubits**. 

To grasp the power of a qubit, we must explore three pillar principles of quantum mechanics: **Superposition**, **Entanglement**, and **Interference**.

Let’s begin with **Superposition**. Popular science often tells you that a qubit can be "both 0 and 1 at the same time." As future quantum engineers, I want you to banish that phrase from your vocabulary. It is not that the qubit is magically in both states simultaneously; rather, a qubit exists in a *linear combination* of states. Mathematically, we write the state of a qubit as $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$, where $\alpha$ and $\beta$ are complex numbers called probability amplitudes. 

Think of a coin. If it is lying flat on the table, it is either heads or tails—that is a classical bit. But if you spin that coin on the table, is it heads or tails? It is in a dynamic state of spin, containing the potential for both. Only when you splat your hand down and stop it does it collapse into a definite state of heads or tails. In quantum mechanics, "stopping the coin" is the act of measurement. Until we measure it, the qubit is spinning in a mathematically rich landscape of probabilities.

This leads us to the second, and perhaps most mind-bending principle: **Entanglement**. Albert Einstein famously dismissed it as "spooky action at a distance," yet it is the engine of quantum computation. When two qubits become entangled, their individual identities merge. They form a single, unified quantum state. If you measure one qubit, you instantly know the state of its entangled partner, no matter if they are separated by a millimeter or a light-year.

For classical computers, if you add more bits, your processing power scales linearly. Ten bits can represent one of $2^{10}$ (or 1,024) possible states at any one time. But with quantum entanglement, a system of $N$ qubits can exist in a superposition of $2^N$ states *simultaneously*. To describe the state of just 300 perfectly entangled qubits, you would need more complex numbers than there are atoms in the observable universe. This exponential scaling of the state space is where the raw power of quantum computing resides. We are, quite literally, computing in a mathematical space larger than the physical universe.

But how do we harness this power? If we have $2^{300}$ states, but the moment we measure the system it collapses into just one random result, how is this useful? 

The answer is **Interference**, our third principle. Just like water waves in an ocean, quantum probability amplitudes can interfere. They can interfere constructively, where the crests align and amplify each other, or destructively, where a crest and a trough cancel each other out. 

The art of quantum programming is not about trying all possibilities at once like a brute-force classical search. Instead, it is about designing algorithms—using quantum logic gates—that choreograph this interference. We manipulate the quantum states so that the paths leading to the wrong answers destructively interfere and cancel out, while the paths leading to the correct answer constructively interfere, boosting its probability close to 100%. When we finally make that final measurement, the "spinning coin" stops, and the correct answer emerges.

Now, why is this course called Quantum *Engineering* and not just Quantum Physics? 

Because writing these algorithms on a whiteboard is relatively easy. Building the physical machines to run them is one of the greatest technological challenges humanity has ever faced. 

As quantum engineers, your enemy is **decoherence**. Qubits are incredibly delicate. The slightest thermal vibration, the tiniest stray electromagnetic wave, even the warmth of a passing photon can cause a qubit to lose its quantum properties and collapse back into a boring, classical state. This is why many of our current quantum computers must be housed in dilution refrigerators—giant, golden chandeliers of copper and coaxial cables that cool the quantum processors to 10 millikelvin. That is colder than deep space.

Your job over the coming years will be to master the physical platforms we use to realize these qubits. You will learn about:
*   **Superconducting qubits**, which use tiny loops of superconducting wire and Josephson junctions to create artificial atoms.
*   **Trapped ion systems**, which suspend individual charged atoms in electromagnetic fields, manipulating them with high-precision lasers.
*   **Silicon spin qubits**, which leverage the existing manufacturing infrastructure of the semiconductor industry to trap single electrons in quantum dots.

You will also study **Quantum Error Correction**. Because physical qubits are so prone to noise, we must use hundreds or thousands of noisy physical qubits, entangled together, to protect and construct a single, pristine "logical qubit." Solving this scaling problem is not a theoretical physics problem; it is an engineering triumph waiting to happen.

Let me manage your expectations before we conclude. Quantum computers are not "faster classical computers." They will not make your web browser load quicker, nor will they replace your gaming consoles. For most everyday tasks, classical computers will always reign supreme. 

However, for specific, incredibly complex problems, quantum computers will revolutionize our world. They will simulate quantum chemistry, allowing us to design life-saving drugs in days rather than decades, and create highly efficient catalysts for nitrogen fixation to revolutionize agriculture. They will optimize global logistics, untangling supply chains to reduce carbon footprints. And yes, they will force us to rewrite the security protocols of the internet by rendering current cryptographic standards obsolete.

You are entering this field at a historic inflection point. We are moving out of the purely scientific phase and into the engineering phase. The questions are no longer just "Is this physics possible?" but "How do we scale it? How do we manufacture it? How do we make it reliable?"

In this lecture hall are the future architects of the quantum age. It will be difficult. The mathematics will challenge you, the laboratory debugging will frustrate you, and quantum mechanics will repeatedly defy your common sense. But I promise you, there is nothing quite as thrilling as programming a machine that operates outside the boundaries of classical reality.

Welcome to Quantum Engineering. Let’s get to work.*/