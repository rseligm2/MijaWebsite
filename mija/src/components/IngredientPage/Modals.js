import flowers from "../../resources/flowers.jpg";
import tree from "../../resources/tree.jpg";
import cloverflowers from "../../resources/cloverflowers.jpg";
import waves from "../../resources/waves.jpg";
import React from "react";
import Button from '@material-ui/core/Button';
import "./IngredientPage.css";

export const extracts = <div className="modal_container">
    <img src={flowers} alt="circle_img" className="modal_img"/>
    <h1 className="modal_title">Extracts</h1>
    <h3 className="modal_header">Plant-based extracts</h3>
    <p className="modal_info">Chamomile extract - From the chamomile flower, it is naturally soothing to dry skin which can help maintain a healthy scalp and can enhance natural highlights.</p>
    <p className="modal_info">Cucumber extract - Naturally high in minerals and potassium, cucumber extract is soothing to skin and scalp  and contains silica which can strengthen hair.</p>
    <p className="modal_info">Date palm extract - This is an extract rich in hair smoothing and skin softening properties.  It can help the hair appear thicker while improving manageabllity.</p>
    <p className="modal_info">Flax seed extract - Rich in Omega-3 acids, its moisturizing and can help prevent breakage.  Controls flyaways and can both hydrate and add shine.</p>
    <p className="modal_info">Gingko biloba extract - The plant contains 49 different antioxidants and is used to prevent environmental damage, smooth hair and helps decrease flyaways.</p>
    <p className="modal_info">Green Tea Extract - Powerful anti-oxidants make this extract perfect for scalp health. The naturally occurring caffeine may stimulate circulation in the scalp to encourage hair growth.</p>
    <p className="modal_info">Guava - Contains vitamins C and A which can benefit those with oily hair.   Naturally rich in omega fatty acids, it also offers conditioning benefits.</p>
    <p className="modal_info">Sake - Fermented from rice, sake is rich in vitamins, minerals and amino acids, this extract is aimed at moisturizing and nourishing hair.</p>
    <p className="modal_info">Soy - Enhances natural highlights of blond to light brown hair while adding shine, volume and decreasing tangles.</p>
</div>;

export const proteins = <div className="modal_container">
    <img src={tree} alt="circle_img" className="modal_img"/>
    <h1 className="modal_title">Hydrolyzed Proteins</h1>
    <h3 className="modal_header">Plant-based proteins</h3>
    <p className="modal_info">Baobab protein - Made from the seeds of the upside down tree of Africa, this unique combination of hair loving amino acids, offers exceptional damage recovery, conditioning and nourishment for your hair.</p>
    <p className="modal_info">Jojoba protein - Highly effective to repair and condition damaged hair.  Ideal for adding shine and luster.</p>
    <p className="modal_info">Kale protein blend - The combination of Kale, Carrot and Lemon proteins, this blend is packed with vitamins and antioxidants for added softness and shine. It also plumps up hair for added volume.</p>
    <p className="modal_info">Milk Protein - Nutrient rich due to its complete amino acid content, it improves elasticity of hair, easier combing and strength to prevent breakage.</p>
    <p className="modal_info">Oat Protein - Creates a silky smooth feeling on hair and skin.  Benefits dry and damaged hair and may reduce the appearance of frizz and flyaways.</p>
    <p className="modal_info">Phytokeratin Protein- A combination of  hydrolyzed proteins from wheat, corn and soybeans mimics human hair amino acids.  Enhances moisture and conditioning to increase strength and elasticity.</p>
    <p className="modal_info">Quinoa Protein -High amino acid content, quinoa protein encourages damage repair and conditioning.  It also improves color uptake and retention for color processed hair.</p>
    <p className="modal_info">Rice Protein - Enhances natural highlights of blond to light brown hair while adding shine and volume. Also helps decrease tangles.</p>
    <p className="modal_info">Silk Protein - Provides a protective silk barrier that adds luster, body and manageability.</p>
</div>;

export const activeing = <div className="modal_container">
    <img src={cloverflowers} alt="circle_img" className="modal_img"/>
    <h1 className="modal_title">Active Ingredients</h1>
    <h3 className="modal_header">Inspired by nature</h3>
    <p className="modal_info">Follicle Stimulating Peptide - Created from amino acids and red clove extract, this compound was created to encourage hair growth.</p>
    <p className="modal_info">Kera Straight & Curl - A blend of hydrolyzed keratin and Trametes versicolor extract (a type of mushroom). helps repair and strengthen hair while protecting it while styling.</p>
    <p className="modal_info">Lycopene Bioferment  -  Can be absorbed by the hair fiber to strengthen hair.  It directly nourishes the hair and provides the building blocks it needs to maintain its integrity.</p>
    <p className="modal_info">Pisum Stivum Peptide - Made from pea protein, its volumizing, conditioning and reduces damage to promote scalp and follicle health.</p>
    <p className="modal_info">Procutigen Bond -  Derived from chia seeds, this compound helps repairs broken bonds that occur during chemical stress.</p>
    <p className="modal_info">Procutigen Hold - Made from bamboo protein, it supports hair to hold styles longer while protecting hair from style damage.</p>
    <p className="modal_info">Rice Curl Complex - Made from tomato and rice extracts, keratin amino acids and enzymes, this complex is designed to protect your hair against the environment while making curls last longer.</p>
    <p className="modal_info">Split End Complex - Made from rice protein and rice extract, this ingredient works to repair split ends while preventing new ones.</p>
    <p className="modal_info">Vegan Kerazyme - Made from bamboo and mushroom extracts plus corn, wheat & soy hydrolyzed proteins, this active works to protect against styling and UV damage.</p>
</div>;

export const globalconsc = <div className="modal_container">
    <img src={waves} alt="circle_img" className="modal_img"/>
    <h1 className="modal_title">Globally Conscious</h1>
    <h3 className="modal_header">Clean hair, clean world</h3>
        <p className="modal_info">We are committed to:</p>
        <p className="modal_info">Biodegradable, ECOCERT and organic ingredients.</p>
        <p className="modal_info">Our products are:</p>
        <p className="modal_info">petroleum-free</p>
        <p className="modal_info">sulfate-free</p>
        <p className="modal_info">formaldehyde-free</p>
        <p className="modal_info">fragrance-free</p>
        <p className="modal_info">paraben-free</p>
        <p className="modal_info">cocamidopropyl betaine-free</p>
        <p className="modal_info">silicone-free</p>
        <p className="modal_info">phthalate-free</p>
        <p className="modal_info">filler-free (no added salt)</p>
        <p className="modal_info">Vegan (exception of milk protein)</p>
        <p className="modal_info">Family and friends tested only</p>
        <p className="modal_info">Minimal use of plastic</p>
        <p className="modal_info">Glue-free labels</p>
        <p className="modal_info">Globally-approved preservatives</p>
</div>;