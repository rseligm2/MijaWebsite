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
    <p className="modal_info">Chamomile extract - The chamomile flower is a natural soother.  Great for dry skin, chamomile extract will maintain a healthy scalp and enhance natural highlights.</p>
    <p className="modal_info">Cucumber extract - Brimming with minerals and potassium, cucumber extract is soothing to skin and scalp  and contains silica which can strengthen hair.</p>
    <p className="modal_info">Date palm extract - Rich in hair smoothing and skin softening properties, this extract helps hair appear thicker while improving manageability.</p>
    <p className="modal_info">Flax seed extract - Rich in Omega-3 fatty acids, this moisturizing extract can help prevent breakage, control flyaways and can add shine.</p>
    <p className="modal_info">Gingko biloba extract - A bundle of 49 different antioxidants, this extract is used to prevent environmental damage, smooth hair and helps decrease flyaways.</p>
    <p className="modal_info">Green Tea Extract - Powerful anti-oxidants make this extract perfect for scalp health. The naturally occurring caffeine may stimulate circulation in the scalp to encourage hair growth.</p>
    <p className="modal_info">Guava - Loaded with both vitamins C and A, guava extract can benefit those with oily hair because of its astringent qualities.   Naturally rich in omega fatty acids, it also offers conditioning benefits.</p>
    <p className="modal_info">Sake - Fermented from rice, sake is rich in vitamins, minerals and amino acids.  This extract moisturizes and nourishes hair.</p>
    <p className="modal_info">Soy - Enhances natural highlights of blond to light brown hair.  It also minimizes tangles while adding shine and volume to your hair.</p>
</div>;

export const proteins = <div className="modal_container">
    <img src={tree} alt="circle_img" className="modal_img"/>
    <h1 className="modal_title">Hydrolyzed Proteins</h1>
    <h3 className="modal_header">Plant-based proteins</h3>
    <p className="modal_info">Baobab protein - One of the strongest natural hair repair proteins, baobab protein is extracted from the seed of the upside-down tree of Africa.  This powerful mix of hair-loving amino acids enhances damage recovery, conditions and nourishes your hair.</p>
    <p className="modal_info">Jojoba protein - Highly effective in repairing and conditioning damaged hair, jojoba also brings out the shine and luster of your hair.</p>
    <p className="modal_info">Kale protein blend - The combination of Kale, Carrot and Lemon proteins is jam-\packed with vitamins and antioxidants for added softness, shine and loads of volume.</p>
    <p className="modal_info">Milk Protein - The highly nutrient rich protein is a fantastic breakage-prevention agent.  It improves elasticity and strength to make your hair easier to comb.</p>
    <p className="modal_info">Oat Protein - Creates a silky smooth feeling on hair and skin.  Benefits dry and damaged hair and may reduce the appearance of frizz and flyaways.</p>
    <p className="modal_info">Phytokeratin Protein- A combination of hydrolyzed proteins from wheat, corn and soybeans this complex mimics human hair amino acids.  Enhances moisture and conditioning to increase strength and elasticity.</p>
    <p className="modal_info">Quinoa Protein - Qunioa works both to improve color uptake and retention while at the same time encouraging damage repair with conditioning.</p>
    <p className="modal_info">Rice Protein - Enhances natural highlights of blond to light brown hair while adding shine and volume. Also helps decrease tangles.</p>
    <p className="modal_info">Silk Protein - Creates a protective silk barrier adds luster, body and manageability.</p>
</div>;

export const activeing = <div className="modal_container">
    <img src={cloverflowers} alt="circle_img" className="modal_img"/>
    <h1 className="modal_title">Active Ingredients</h1>
    <h3 className="modal_header">Nature’s best with a boost</h3>
    <p className="modal_info">Growth Boost (Follicle Stimulating Peptide) - Derived from amino acids and red clove extract, this compound encourages hair growth.</p>
    <p className="modal_info">Strength Boost (Kera Straight & Curl) - A blend of hydrolyzed keratin and Trametes versicolor extract (a type of mushroom). It repairs and strengthens your hair and also protects it during styling.</p>
    <p className="modal_info">Volume Boost (Pisum Stivum Peptide) - Harnessing the power of pea protein, this boost is volumizing, conditioning and promotes scalp and hair follicle health.</p>
    <p className="modal_info">Repair Boost (Procutigen Bond) -  Extracted from one of the world’s healthiest powerfoods, chia seeds, this compound repairs broken bonds that occur during chemical stress.</p>
    <p className="modal_info">Heat Protect Boost (Procutigen Hold) - Made from bamboo protein, it supports hair to hold styles longer while protecting hair from style damage.</p>
    <p className="modal_info">Curl Boost (Rice Curl Complex) - Made from tomato and rice extracts, keratin amino acids and enzymes, this complex is designed to protect your hair against the environment while making both natural curls and styled curls last longer.</p>
    <p className="modal_info">Split End Boost (Split End Complex) - Made from rice protein and rice extract, this complex works to repair existing split ends while preventing new ones.</p>
    <p className="modal_info">Protection Boost (Vegan Kerazyme) - Made from bamboo and mushroom extracts plus corn, wheat & soy hydrolyzed proteins, this complex protects against styling and UV damage.</p>
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