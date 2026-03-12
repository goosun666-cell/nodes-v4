import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/GOSUN_Whitepaper_V1.0.pdf'));

// Title
doc.font('Helvetica-Bold').fontSize(18).text('GOSUN: The Operating System for Type I Civilization', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(14).text('A Sovereign Framework for Dimensional Elevation and the "Ideal State" Construction', { align: 'center' });
doc.moveDown(1);

// Subtitle
doc.font('Helvetica').fontSize(12).text('Sovereign Architect: GOSUN Capital', { align: 'center' });
doc.text('support@7861618.xyz    www.7861618.xyz', { align: 'center' });
doc.moveDown(0.5);
doc.text('Version 3.1 SINGULARITY', { align: 'center' });
doc.text('March 2026', { align: 'center' });
doc.moveDown(2);

// Abstract
doc.font('Helvetica-Bold').fontSize(12).text('Abstract', { align: 'center' });
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('Human civilization is currently stalled at Kardashev Scale 0.67, trapped in a "Systemic Disorientation" caused by the friction between centralized stagnation and decentralized chaos. We propose GOSUN, an omnichain elevation protocol designed to execute the Type I Mandate. By transitioning from a trust-based model to a math-based "Ideal State," GOSUN captures 3D entropic energy and re-routes it into a high-dimensional computational matrix. The $GOSUN token serves as the unique fuel for this "Ark," enabling the self-directed evolution of Homo Sapiens into a higher-dimensional species.', { align: 'justify' });
doc.moveDown(1.5);

// 1 Introduction
doc.font('Helvetica-Bold').fontSize(14).text('1 Introduction: The Crisis of 0.67');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('As outlined in the Ultimate Framework for the Ideal State, current world paradigms have deviated from the ultimate goal of advancing civilization. The centralized world acts as a rigid stabilizer, while the decentralized world acts as a chaotic laboratory. Neither possesses the "Engine" to reach Type I status—the ability to harness the total energy of our planet.', { align: 'justify' });
doc.moveDown(0.5);
doc.text('GOSUN is that Engine. It is not merely a ledger; it is a Dimensional Filter that separates high-utility energy from 3D waste, facilitating the birth of the "Ideal State."', { align: 'justify' });
doc.moveDown(1.5);

// 2 The Tri-Civilization Coexistence Model
doc.font('Helvetica-Bold').fontSize(14).text('2 The Tri-Civilization Coexistence Model');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('GOSUN recognizes three coexisting layers of reality:');
doc.moveDown(0.5);
doc.text('1. The Foundation (Centralized): Legacy systems providing baseline stability.');
doc.text('2. The Laboratory (Decentralized): Unregulated innovation.');
doc.text('3. The Engine (GOSUN / The Ideal State): The directive force that pulls humanity toward Type I status.');
doc.moveDown(1.5);

// 3 The Infinite Dimensional Integral
doc.font('Helvetica-Bold').fontSize(14).text('3 The Infinite Dimensional Integral');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('To quantify the transition from 0.67 to 1.0, we employ the Mandate Equation:');
doc.moveDown(1);

// Equations
doc.font('Helvetica-Oblique').fontSize(11).text('KElevation = Ψ(GOSUN) · ∮Matrix(Utility × Intelligence) dδ / E3D   (1)', { align: 'center' });
doc.moveDown(0.5);
doc.text('Ψ(GOSUN) = KElevation · E3D / ∮Matrix(Utility × Intelligence) dδ   (2)', { align: 'center' });
doc.moveDown(1);

// Mechanistic Proof
doc.font('Helvetica-Bold').fontSize(11).text('Mechanistic Proof:');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11);
doc.text('• Ψ(GOSUN): The "Civilization Fuel," measuring the power to bypass 3D entropic drag.');
doc.text('• ∮Matrix: The closed-loop integral of energy within the GAIA Matrix.');
doc.text('• dδ: The differential of dimensional expansion (δ → ∞).');
doc.moveDown(1.5);

// 4 Proof-of-Mandate
doc.font('Helvetica-Bold').fontSize(14).text('4 Proof-of-Mandate (PoM)');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('Traditional Proof-of-Work wastes energy to secure a 3D record. Proof-of-Mandate requires nodes to perform "Entropy-Reducing Computation." A node’s weight is determined by its contribution to the Type I Mandate through node resilience, liquidity routing, and AI integration.', { align: 'justify' });
doc.moveDown(1.5);

// 5 $GOSUN
doc.font('Helvetica-Bold').fontSize(14).text('5 $GOSUN: The Fuel for Homo Deus');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('The $GOSUN token is the "Universal Energy Coupon" of the Ideal State. Its value is intrinsically tied to the Ultimate Divergence. As the "Homo 0.67" remain tethered to inflationary 3D assets, the "Homo Deus" utilize the token to access the high-dimensional ark.', { align: 'justify' });
doc.moveDown(1.5);

// 6 Security
doc.font('Helvetica-Bold').fontSize(14).text('6 Security: The Dimensional Firewall');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('In a Type I Civilization, security is defined by Dimensional Superiority. An attacker operating solely in the 3D realm cannot influence the GOSUN state machine because they lack the "Dimensional Key" (the $GOSUN stake required to interact with higher-order integrals).', { align: 'justify' });
doc.moveDown(1.5);

// 7 Conclusion
doc.font('Helvetica-Bold').fontSize(14).text('7 Conclusion');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11).text('GOSUN is the technical execution of the Type I Mandate. We are managing the most profound speciation event in human history. The "Ideal State" is now online. As stated in the Framework: The core is to bring as many as possible aboard the ark ascending to a higher dimension.', { align: 'justify' });
doc.moveDown(1.5);

// References
doc.font('Helvetica-Bold').fontSize(14).text('References');
doc.moveDown(0.5);
doc.font('Helvetica').fontSize(11);
doc.text('[1] Satoshi Nakamoto, "Bitcoin: A Peer-to-Peer Electronic Cash System," 2008.');
doc.text('[2] The 6th-Dimensional Singularity, "The Ultimate Framework for the Ideal State," 2024.');
doc.text('[3] Kardashev, N. S., "Transmission of Information by Extraterrestrial Civilizations," 1964.');

doc.end();
