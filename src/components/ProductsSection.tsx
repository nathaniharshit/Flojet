import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Shield, Clock, ChevronDown, ChevronUp, FileText, X, Download } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'main' | 'generations' | 'products' | 'regularProducts' | 'productDetail'>('main');
  const [selectedGeneration, setSelectedGeneration] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedProductDetail, setSelectedProductDetail] = useState<any>(null);

  const goToGenerations = () => {
    setCurrentScreen('generations');
  };

  const goToProducts = (genIndex: number) => {
    setSelectedGeneration(genIndex);
    setCurrentScreen('products');
  };

  const goToRegularProducts = (productId: number) => {
    setSelectedProduct(productId);
    setCurrentScreen('regularProducts');
  };

  const goToProductDetail = (product: any) => {
    setSelectedProductDetail(product);
    setCurrentScreen('productDetail');
  };

  const goBack = () => {
    if (currentScreen === 'productDetail') {
      if (selectedGeneration !== null) {
        setCurrentScreen('products');
      } else {
        setCurrentScreen('regularProducts');
      }
    } else if (currentScreen === 'products') {
      setCurrentScreen('generations');
    } else if (currentScreen === 'generations' || currentScreen === 'regularProducts') {
      setCurrentScreen('main');
    }
  };
  const products = [
    {
      id: 1,
      name: "Non Asbestos Braided Gland Packing Rope & Rings",
      description: "Premium quality braided packing solutions for valves, pumps, and rotating equipment with superior sealing performance.",
      features: [
        "100% Non-asbestos materials", 
        "Excellent chemical resistance", 
        "Temperature range: -200°C to 280°C", 
        "Available in ropes and rings",
        "Various cross-sections available",
        "Suitable for steam, water, and chemical applications"
      ],
      hasGenerations: true,
      generations: [
        {
          name: "Generation 1",
          count: 12,
          description: "Traditional formulations with proven performance",
          subProducts: [
            {
              name: "FLOJET - TGA (PTFE/Graphite + Aramid)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067263.jpg",
              description: "Braided from Aramid fibers with o Superior Grade Gores PTFE Graphite. The Aramid filament at the end of the packing confers it to a high abrasion resistance, greater stability of packing even at high pressures. This packing is highly suitable for high pressures, and high speeds and gives excellent results with abrasive particles in media like mine dewatering pumps and reciprocating pumps.",
              dimensionChart: [
                { size: "6.5", metersPerKg: "16.0" },
                { size: "8.0", metersPerKg: "11.5" },
                { size: "10.0", metersPerKg: "9.5" },
                { size: "12.0", metersPerKg: "4.8" },
                { size: "14.0", metersPerKg: "4.1" },
                { size: "16.0", metersPerKg: "3.2" },
                { size: "18.0", metersPerKg: "2.7" },
                { size: "20.0", metersPerKg: "2.1" },
                { size: "22.0", metersPerKg: "1.8" },
                { size: "25.0", metersPerKg: "1.4" }
              ],
              properties: {
                description: "GORES PTFE/GRAPHITE AT FACES & ARAMID AT CORNER",
                temperature: "-200 TO 260",
                speed: "18",
                pressure: "8000",
                phValue: "2 - 12"
              },
              documentFile: "1698389411.pdf"
            },
            {
              name: "FLOJET - PA (PURE ARAMID)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067380.jpg",
              description: "Diagonally woven packing obtained from 100% aramid yarns Braided from Aramid fibres with o Superior Grade Gores PTFE Graphite. The Aramid filament at the end of the packing confers it to a high abrasion resistance, and greater stability of packing even at high pressures. This packing is highly suitable for high pressures, and high speeds and gives excellent results with abrasive particles in media like mine dewatering pumps and reciprocating pumps.",
              dimensionChart: [
                { size: "6.5", metersPerKg: "15.0" },
                { size: "8.0", metersPerKg: "12.0" },
                { size: "10.0", metersPerKg: "7.8" },
                { size: "12.0", metersPerKg: "3.0" },
                { size: "14.0", metersPerKg: "3.9" },
                { size: "16.0", metersPerKg: "2.7" },
                { size: "18.0", metersPerKg: "1.9" },
                { size: "20.0", metersPerKg: "1.6" },
                { size: "22.0", metersPerKg: "1.3" },
                { size: "25.0", metersPerKg: "1.0" }
              ],
              properties: {
                description: "100% PURE ARAMID FIBER",
                temperature: "-200 TO 280",
                speed: "15",
                pressure: "8000",
                phValue: "3 - 12"
              },
              documentFile: "1660813073.pdf"
            },
            {
              name: "FLOJET - PT (PURE PTFE)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067402.jpg",
              description: "100% pure PTFE packing with PTFE dispersion that provides low friction finish and prevents leakage through the braid. It resists most caustic media and is a firm, pliable wear-resistant packing, recommended for pharmaceutical industries.",
              dimensionChart: [
                { size: "6.5", metersPerKg: "12.9" },
                { size: "8.0", metersPerKg: "9.2" },
                { size: "10.0", metersPerKg: "6.8" },
                { size: "12.0", metersPerKg: "4.4" },
                { size: "14.0", metersPerKg: "3.0" },
                { size: "16.0", metersPerKg: "2.5" },
                { size: "18.0", metersPerKg: "1.9" },
                { size: "20.0", metersPerKg: "1.4" },
                { size: "22.0", metersPerKg: "1.2" },
                { size: "25.0", metersPerKg: "1.0" }
              ],
              properties: {
                description: "100% PURE PTFE YARN WITH PTFE DISPERSION",
                temperature: "-200 TO 260",
                speed: "10",
                pressure: "5000",
                phValue: "0 - 14"
              },
              documentFile: "1663324350.pdf"
            },
            {
              name: "FLOJET-TA (PTFE/ARAMID)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1675771322.jpg",
              description: "PTFE with reinforced edges of aramid yarn, this combination provides structural strength and is recommended for plunger applications in the high-pressure range of up to 500 bar. Ideal for high-pressure pump handling carbonate and ammonia solutions.",
              dimensionChart: [
                { size: "6.5", metersPerKg: "12.5" },
                { size: "8.0", metersPerKg: "11.2" },
                { size: "10.0", metersPerKg: "9.5" },
                { size: "12.0", metersPerKg: "4.5" },
                { size: "14.0", metersPerKg: "3.9" },
                { size: "16.0", metersPerKg: "3.0" },
                { size: "18.0", metersPerKg: "2.0" },
                { size: "20.0", metersPerKg: "1.4" },
                { size: "22.0", metersPerKg: "1.2" },
                { size: "25.0", metersPerKg: "1.0" }
              ],
              properties: {
                description: "PTFE ON FACES & ARAMID FIBER ON THE CORNER",
                temperature: "-200 TO 260",
                speed: "10",
                pressure: "7000",
                phValue: "2- 12"
              },
              documentFile: "1673599701.pdf"
            },
            {
              name: "FLOJET- TG (100% GFO)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067462.jpg",
              description: "Braided Compression packing made from 100% Gore's, Pre Printed GFO. Fibers' which is a single molecular PTFE/Graphite solid yarn manufactured in a technique with optimal density and finely adjusted braiding in relation to each cross-section, manufactured by M/s. W. L. Gore & Associates, Inc. Packing Offers proven consistent high performance for a varied range of applications. The Packing on one Side Face has the Words '100% GFO ' Clearly Printed which ensures Genuine I 00% GFO. Packing. And remember, if it doesn't have I 00% GFO. Printed on the packing, it's not 100% GFO.",
              dimensionChart: [
                { size: "6.5", metersPerKg: "13.5" },
                { size: "8.0", metersPerKg: "10.5" },
                { size: "10.0", metersPerKg: "6.6" },
                { size: "12.0", metersPerKg: "4.5" },
                { size: "14.0", metersPerKg: "4.0" },
                { size: "16.0", metersPerKg: "2.5" },
                { size: "18.0", metersPerKg: "2.1" },
                { size: "20.0", metersPerKg: "1.7" },
                { size: "22.0", metersPerKg: "1.3" },
                { size: "25.0", metersPerKg: "1.0" }
              ],
              properties: {
                description: "100% GFO PRE-PRINTED PACKING",
                temperature: "-200 TO 300",
                speed: "25",
                pressure: "5000",
                phValue: "0- 14"
              },
              documentFile: "1663324367.pdf"
            },
            {
              name: "FLOJET - TG (SP) (PTFE / GRAPHITE)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067502.jpg",
              description: "This is a special product developed for all most all-purpose applications, having carbon content > 75 % to withstand temperature @ 290°(and have excellent oxidation resistance. They have effective chemicals' resistance, tolerating a pH range from strong acid to a strong base",
              properties: {
                description: "PTFE/GRAPHITE PACKING WITH HIGH C%",
                temperature: "@290",
                speed: "25",
                pressure: "5500",
                phValue: "0- 14"
              },
              documentFile: "1666067502.pdf"
            },
            {
              name: "FLOJET - TCG (PTFE COATED GRAPHITE)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067560.jpg",
              description: "Packing obtained from PTFE with a high content of graphite coating and a low friction run-in compound, low shrinkage, less volume loss and therefore fast run-in makes this packing suitable for applications in agitators, mixers, pumps, valves etc.",
              dimensionChart: [
                { size: "6.5", metersPerKg: "13.9" },
                { size: "8.0", metersPerKg: "10.6" },
                { size: "10.0", metersPerKg: "6.5" },
                { size: "12.0", metersPerKg: "4.5" },
                { size: "14.0", metersPerKg: "3.1" },
                { size: "16.0", metersPerKg: "2.9" },
                { size: "18.0", metersPerKg: "1.9" },
                { size: "20.0", metersPerKg: "1.6" },
                { size: "22.0", metersPerKg: "1.4" },
                { size: "25.0", metersPerKg: "1.0" }
              ],
              properties: {
                description: "PTFE YARN COATED WITH 30% GRAPHITE",
                temperature: "-200 TO 280",
                speed: "20",
                pressure: "5000",
                phValue: "0- 14"
              },
              documentFile: "1663324396.pdf"
            },
            {
              name: "FLOJET - GT (GRAPH. TEXTURED TAPE)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067586.jpg",
              description: "This graphite textured tape manufactured from natural graphite flakes available as a mineral on earth is an advanced and adaptable valve system packing, a predetermined length of tape is wound onto the stem and then compressed until the stuffing box is full using this system a small tape inventory can pack any size valve with excellent sealing service. Also, available in die-formed rings custom engineered to individual requirements. It is also available with self-adhesive strip.",
              properties: {
                description: "GRAPHITE TEXTURED TAPE",
                temperature: "-200 TO 600",
                speed: "---",
                pressure: "3000",
                phValue: "0- 14"
              },
              documentFile: "1662552556.pdf"
            },
            {
              name: "FLOJET - PG (PURE GRAPHITE)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067158.jpg",
              description: "Made from special graphite (c > 99%) yarn and coated with a graphite lubricant. This packing is impervious to most corrosive acids & caustics ideally suited for use in severe service conditions, and is an excellent high-temperature packing.",
              dimensionChart: [
                { size: "6.5", metersPerKg: "23.0" },
                { size: "8.0", metersPerKg: "14.3" },
                { size: "10.0", metersPerKg: "10.7" },
                { size: "12.0", metersPerKg: "5.5" },
                { size: "14.0", metersPerKg: "4.4" },
                { size: "16.0", metersPerKg: "3.3" },
                { size: "18.0", metersPerKg: "2.8" },
                { size: "20.0", metersPerKg: "2.6" },
                { size: "22.0", metersPerKg: "2.1" },
                { size: "25.0", metersPerKg: "1.7" }
              ],
              properties: {
                description: "100% PURE GRAPHITE C> 99%",
                temperature: "-600",
                speed: "20",
                pressure: "5000",
                phValue: "0- 14"
              },
              documentFile: "PG_datasheet.pdf"
            },
            {
              name: "FLOJET - PC (PURE CARBON)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067178.jpg",
              description: "A carbon (c > 94 < 99) filament packing that is highly conformable softer packing that keeps leakage rates low. This packing is used in a variety of pumps - boiler feed, chemicals, fuel oil, transfer condensate return, extremely hot water etc. and is ideal for steam valves.",
              dimensionChart: [
                { size: "6.5", metersPerKg: "24.0" },
                { size: "8.0", metersPerKg: "13.0" },
                { size: "10.0", metersPerKg: "11.0" },
                { size: "12.0", metersPerKg: "6.0" },
                { size: "14.0", metersPerKg: "4.9" },
                { size: "16.0", metersPerKg: "4.1" },
                { size: "18.0", metersPerKg: "3.2" },
                { size: "20.0", metersPerKg: "2.8" },
                { size: "22.0", metersPerKg: "2.3" },
                { size: "25.0", metersPerKg: "1.9" }
              ],
              properties: {
                description: "100% PURE CARBON FIBER, C>94%",
                temperature: "-200 TO 600",
                speed: "16",
                pressure: "3000",
                phValue: "0- 14"
              },
              documentFile: "1663324267.pdf"
            },
            {
              name: "FLOJET - CI (CARBON INCONEL)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067194.jpg",
              description: "A super tough packing braided from Inconel wires jacketed throughout with soft carbon fibers is recommended for very high temperatures, and high-pressure applications where carbon fibers conduct the heat and the Inconel wires give the necessary strength for high pressures suitable for all valve applications & is excellent when die formed.",
              dimensionChart: [
                { size: "6.5", metersPerKg: "17.3" },
                { size: "8.0", metersPerKg: "9.7" },
                { size: "10.0", metersPerKg: "7.11" },
                { size: "12.0", metersPerKg: "4.0" },
                { size: "14.0", metersPerKg: "3.11" },
                { size: "16.0", metersPerKg: "2.66" },
                { size: "18.0", metersPerKg: "2.0" },
                { size: "20.0", metersPerKg: "1.7" },
                { size: "22.0", metersPerKg: "1.55" },
                { size: "25.0", metersPerKg: "1.22" }
              ],
              properties: {
                description: "CARBON YARN JACKETED ON INCONEL WIRES",
                temperature: "-200 TO 900",
                speed: "---",
                pressure: "10000",
                phValue: "1- 11"
              },
              documentFile: "1663324282.pdf"
            },
            {
              name: "FLOJET - GN (GRAPHITE NATURAL FOIL)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666067216.jpg",
              description: "Special duty GRAPHITE reinforced braided packing from flexible foil available for applications involving extreme conditions of temperature, pressure and corrosion. This packing has been developed for valves, pumps, compressors and similar static and dynamic applications.\n\nNOTE, DIE Molded RINGS OF BRAIDED GLAND PACKING CAN ALSO BE MANUFACTURED AS PER SPECIFICATION SIZES FOR VALVES/ PUMPS.",
              properties: {
                description: "GRAPHITE NATURAL FLEXIBLE FOIL (C>98%)",
                temperature: "-200 TO 500",
                speed: "18",
                pressure: "4000",
                phValue: "0-14"
              },
              documentFile: "1663324297.pdf"
            }
          ]
        },
        {
          name: "Generation 2",
          count: 21,
          description: "Advanced formulations with enhanced properties",
          subProducts: [
            {
              name: "FLOJET - Style-1 (Eco eP.T.F.E Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663325597.png",
              description: "This Asbestos Free gland packing is made from Eco EP. T.F.E yarn of Poly Tetrafluoro Ethylene. This packing is suitable for low pressure in food, Pharma, and Chemical Industries suitable for pumps and valves.",
              properties: {
                description: "Eco EP. T.F.E Packing",
                temperature: "-100 C to @ 260° C",
                pressure: "1200 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666068161.pdf"
            },
            {
              name: "FLOJET - Style-2 (EP.T.F.E I Aramid Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663325628.png",
              description: "This gland packing is made from the combination of Synthetic EP.T.F.E Fiber at the faces and Pure Aramid Fiber at the Corners. This Design provides structural strength and is recommended for low-pressure plunger applications and is suitable for pumps handling carbonate & ammonia solutions. And also is suitable for most corrosive chemicals.",
              properties: {
                description: "EP.T.F.E I Aramid Packing",
                temperature: "-150 C to @ 260° C",
                pressure: "2500 PSI",
                phValue: "2 to 12"
              },
              documentFile: "1663325629.pdf"
            },
            {
              name: "FLOJET - Style-3 (EP.T.F.E Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666068348.png",
              description: "This Asbestos Free gland packing is made from pure Synthetic EP.T.F.E Fiber. This gland packing is suitable for Low pressure in Food/Pharma Industries and is also recommended for Vacuum Applications and also serves for most corrosive chemicals.",
              properties: {
                description: "EP.T.F.E Packing",
                temperature: "-150 C to @ 260° C",
                pressure: "2500 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666068348.pdf"
            },
            {
              name: "FLOJET - Style-4 (02 P.T.F.E Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663325682.png",
              description: "This gland packing is made from 100% Virgin P.T.F.E yarn. This packing is especially suitable for Oxygen Service and Impervious to the most corrosive acids and caustic, ideally suited for severe service conditions in Food and Pharma Industries too.",
              properties: {
                description: "02 P.T.F.E Packing",
                temperature: "-200 C to 260° C",
                pressure: "Rotary -100 bars, Reciprocating -17 Bars, Valves-150 Bars",
                phValue: "0 to 14"
              },
              documentFile: "1666068552.pdf"
            },
            {
              name: "FLOJET - Style-5 (Dry P.T.F.E Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663325729.png",
              description: "Gland Packing is made from Pure P.T.F.E impregnated Yarns and is normally harder packing with higher Specific Density than those of other Pure PTFE Packing since the P.T.F.E dispersion Particles Fill out the gaps between the Fibers. This gland packing is suitable for use at high pressure and is normally used in Valves.",
              properties: {
                description: "Dry P.T.F.E Packing",
                temperature: "-200 C to 260° C",
                pressure: "4000 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666068708.pdf"
            },
            {
              name: "FLOJET - Style-6 (EP.T.F.E/Graphite Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663325757.png",
              description: "This is special. Gland packing made from a distinctive EP.T.F.E/Graphite Combination to take care of Extra Lubrication and Conduction which is provided by Graphite. This gland packing is suitable for high temperatures and ideally suitable for Hot Oil, Boiler Feed Pumps, Chemicals, Dyes & Intermediates, Pesticides, and Fertilizer Industries and also in Thermal Power Stations and also in Marine Pumps.",
              properties: {
                description: "EP.T.F.E/Graphite Packing",
                temperature: "-200 C to 260° C",
                pressure: "3250 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666068806.pdf"
            },
            {
              name: "FLOJET - Style-7 (Gore's P.T.F.E/Graphite Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663325793.png",
              description: "This Non-Asbestos Braided Gland Packing is made from P.T.F.E/Graphite Fiber, which is produced from M/s. W.L. Gore & Associates, USA is the World Renowned & Pioneer in the Manufacturing of Single Molecule GFO® Fibers. This P.T.F.E/Graphite Fiber Gland Packing is impregnated with Proprietary Break in Lubricant for Extra Lubricity and Conduction of Heat, hence due to this special feature, the packing does not harden or gets brittle, thereby minimising the shaft wear and also keeps cool running. The Packing is suitable for high temperatures and is suitable for boiler feed pumps, glass-lined reactors, agitators/stirrers and chemicals pumps in Industries such as Fertilizer, Pesticides, Dyes & Intermediates, Thermal Power Stations, Marine and Pharma.",
              properties: {
                description: "Gore's P.T.F.E/Graphite Packing",
                temperature: "-200°C to @ 280°C",
                pressure: "3625 PSI",
                phValue: "@ 0 to 14 except strong oxidizers, aqua Regina, fuming Nitric, fluorine, oleum etc. Does not hydrolyze."
              },
              documentFile: "1666069401.pdf"
            },
            {
              name: "FLOJET - Style-8 (P.T.F.E/Graphite Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666069679.png",
              description: "Square Plaited Braided Asbestos Free Gland Packing made from a combination of PTFE coated with GRAPHITE at the Corners and with United Molecule P.T.F.E/Graphite Fiber at the Faces of Gland Packing, This combination Provided/Gives more elasticity in the gland and does not harden. This gland is suitable for Low-Pressure applications in Pumps, Agitators, Reactors and Valves.",
              properties: {
                description: "P.T.F.E/Graphite Packing",
                temperature: "-200°C to @ 260°C",
                pressure: "2700 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666069679.pdf"
            },
            {
              name: "FLOJET - Style-9 (Graphite / Carbon Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666069954.png",
              description: "This gland packing is made from a blend of Graphite Fibers Jacketed on Carbon Fiber. The Graphite Fibers are of very high purity of Carbon. This gland packing is appropriate for very high-temperature applications in Pumps and Valves in Thermal Power Stations.",
              properties: {
                description: "Graphite / Carbon Packing",
                temperature: "-150°C to @ 550°C",
                pressure: "4000 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666069954.pdf"
            },
            {
              name: "FLOJET - Style-10 (Carbon/Flexible Graphite Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666070018.png",
              description: "Gland Packing is made from Special Carbon Fibers Jacketed with Expanded Natural Flexible Graphite Fibers. The Packing is asbestos free and has High Purity of Carbon Contents. Due to the above combination, packing has high-quality Flexibility and Compressibility and is suitable for use in high Temperatures, Chemical Resistance Pumps, Valves etc.",
              properties: {
                description: "Carbon/Flexible Graphite Packing",
                temperature: "-150°C to @ 550°C",
                pressure: "3500 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666070018.pdf"
            },
            {
              name: "FLOJET - Style-11 (Ultra Graphite Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663326053.png",
              description: "Non-Asbestos Braided Gland Packing made from Crystalline Carbon (Known as Graphite) Fibers having Carbon Content @ 99%, coated with special Expanded Graphite Flakes & Lubricants. This packing is impervious to most corrosive acids and caustics and is much more suitable for use in severe conditions and is excellent high-temperature resistance packing.",
              properties: {
                description: "Ultra Graphite Packing",
                temperature: "-150° C to @ 260° C",
                pressure: "@2500 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666070087.pdf"
            },
            {
              name: "FLOJET - Style-12 (Graphite/Flexible Graphite Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666070861.png",
              description: "Asbestos Free Gland Packing has high-purity of Carbon Fibers & Synthetic Flexible Graphite Fibers. Packing is ideally suitable for High Pressure & Temperature in Pumps, Agitators, Reaction Vessels, and Valves.",
              properties: {
                description: "Graphite/Flexible Graphite Packing",
                temperature: "-150°C to @ 500°C",
                pressure: "4000 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666070861.pdf"
            },
            {
              name: "FLOJET - Style-13 (Carbon & Flexible Graphite Inconel Wire Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663326125.png",
              description: "Gland Packing is made from Continuous Carbon Filament Jacketed with Inconel Wires on external faces and the Core is provided with Expanded Fibers of Graphite having Inconel Wires. The gland is suitable for incredibly high pressures and high temperatures. This is NOT suitable for any ROTARY Sealing as Inconel Wires will cut and damage the shaft and the gland area. Idyllically suitable for extreme temperature stationary sealing in valves & furnace doors.",
              properties: {
                description: "Carbon & Flexible Graphite Inconel Wire Packing",
                temperature: "-200°C to @ 600°C",
                pressure: "6000 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666071012.pdf"
            },
            {
              name: "FLOJET - Style-14 (Carbon P.T.F.E Impregnated Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663326163.png",
              description: "Asbestos Free Interbrand Gland Packing is made from special carbon fibers which are treated with P.T.F.E Solution at the time of and after processing, to achieve smoothness on carbon yarn resulting in low friction and the carbon fibers don't unlock up while cutting into rings form and during the installing in the gland area.",
              properties: {
                description: "Carbon P.T.F.E Impregnated Packing",
                temperature: "-150° C To @ 400 °C",
                pressure: "@ 3000 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666071120.pdf"
            },
            {
              name: "FLOJET - Style-15 (Expanded Graphite P.T.F.E Impregnated Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663326215.png",
              description: "Asbestos Free Packing is made from Expanded Natural Mineral Flexible Graphite Fiber, having High Carbon % Purity, Specially treated with PTFE solution so that Graphite flakes are entrapped and packing does not open up while cutting and installed in the gland area. This gland packing is so flexible and compressible that when compressed in the stuffing box, forms endless forms, resulting in superior scalability.",
              properties: {
                description: "Expanded Graphite P.T.F.E Impregnated Packing",
                temperature: "-200° C to @ 300°C",
                pressure: "@ 3000 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666071196.pdf"
            },
            {
              name: "FLOJET - Style-16 (Glass Fiber Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666071250.jpg",
              description: "The Packing is braided from Glass Fiber, suitable for insulation, high temperature and pressure stationary applications. The important thing is that there is heat accumulation and no heat transfer/dissipation from the gland area, which is recommended for door-sealing applications in Furnaces, Boilers etc. Not Recommended for Rotary Applications.",
              properties: {
                description: "Glass Fiber Packing",
                temperature: "@ 550°C",
                pressure: "6000 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666071250.pdf"
            },
            {
              name: "FLOJET - Style-17 (Graphite Glass Fiber Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666071285.jpg",
              description: "The packing is braided from glass fiber, which is treated with graphite lubricants so that there is little lubrication and heat transfer due to the graphite coating. This gland packing is suitable for insulation, high temperature, and pressure areas.",
              properties: {
                description: "Graphite Glass Fiber Packing",
                temperature: "550°C",
                pressure: "6000 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666071285.pdf"
            },
            {
              name: "FLOJET - Style-18 (Inconel Wire Reinforced Glass Fiber PTFE Treated Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666071450.jpg",
              description: "Asbestos Free Gland Packing made from Glass Fiber Reinforced Inconel wire and Treated with PTFE Solution/Dispersion to achieve High-Pressure Resistance. Suitable for insulation, high temperature and pressure stationary applications. The important thing is that there is heat accumulation and no heat transfer in the gland area.",
              properties: {
                description: "Inconel Wire Reinforced Glass Fiber PTFE Treated Packing",
                temperature: "@ 600° C",
                pressure: "7000 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666071450.pdf"
            },
            {
              name: "FLOJET - Style-19 (Expanded Graphite Inconel Wire Reinforced Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663326494.jpg",
              description: "Non-Asbestos Braided Gland Packing made from Special Duty Expanded Natural Mineral Graphite reinforced with Inconel wire suitable for applications involving high temperature, pressure and corrosion. This packing is suitable for Valves and similar static or dynamic applications.",
              properties: {
                description: "Expanded Graphite Inconel Wire Reinforced Packing",
                temperature: "600°C",
                pressure: "4500 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666071497.pdf"
            },
            {
              name: "FLOJET - Style-20 (PTFE/Graphite Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1666071536.jpg",
              description: "The gland packing is made from Synthetic PTFE / Graphite Fibers and is universally applicable and offers problem-free installation and removal. The packing performs very well in a large range of applications in pH 0-14 Value. It has a good momentum of compressibility and very smooth packing taking care of lubrication in the system.",
              properties: {
                description: "PTFE/Graphite Packing",
                temperature: "-200° C to @ 260°C",
                pressure: "2700 PSI",
                phValue: "0 to 14"
              },
              documentFile: "1666071536.pdf"
            },
            {
              name: "FLOJET - Style-21 (Aramid & PTFE/Graphite Packing)",
              image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1663326575.jpg",
              description: "The gland is made from a combination of Synthetic P.T.F.E/ Graphite at the faces Pure Aramid at the corners and the Core of Packing. Gland Packing is excellent in slurry applications and for high-pressure reciprocating pumps. The design is such that Aramid gives abrasion resistance and strength to the gland and while PTFE / Graphite at Faces gives low friction in running and gives lubrication in the gland area since the fibers, carry inbuilt lubrication systems.",
              properties: {
                description: "Aramid & PTFE/Graphite Packing",
                temperature: "-200° C to @ 280° C",
                pressure: "6000 PSI",
                phValue: "2 to 12"
              },
              documentFile: "1666071573.pdf"
            }
          ]
        }
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
    },
    {
      id: 2,
      name: "Expanded Graphite Sealing Products",
      description: "High-performance expanded graphite gaskets and sheets offering exceptional thermal and chemical resistance.",
      features: [
        "Pure expanded graphite material", 
        "Excellent thermal conductivity", 
        "Chemical inertness", 
        "High temperature resistance up to 450°C",
        "Low stress gasket material",
        "Suitable for flange applications"
      ],
      subProducts: [
        {
          name: "FLOJET - PURE EXPANDED FLEXIBLE GRAPHITE",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1664865461.png",
          description: "FLOJET offers PURE EXPENDED MINERAL FLEXIBLE GRAPHITE fluid sealing products which are highly technological discoveries and these products offer the ULTIMATE ANSWER to any and every fluid sealing problem. EXPANDED MINERAL GRAPHITE has an edge over other man-made fibers, in having the LOWEST Costs, HIGHEST Temperature Resistance, LOWEST coefficient of Friction, HIGHEST Chemicals resistance, and has none of the health and handling problems and is UNIVERSAL IN APPLICATION.",
          composition: "It is a crystalline allotropic form of Carbon naturally in Graphite Mines having a purity of 98 to 99.9%. It is processed uniquely into NATURAL EXPANDED MINERAL GRAPHITE FLAKES which are chemically treated, then heated in an electric resistance furnace and compressed to form soft FLEXIBLE foil. No Binder or respirable fibers, are used, and the material has high purity of 98% and 1% corrosion inhibitors are added for protection.",
          properties: {
            purity: "98%",
            temperatureRange: "-200 °C to + 3000 °C in non-oxidizing; -200 °C to + 500 °C in oxidizing conditions; -200°C to + 650 °C in steam conditions",
            operatingPressure: "140 bar (2058 psi)",
            phValue: "O to 14 (Chemically inert)",
            leachableChloride: "50 ppm maximum",
            tensileStrength: "650 psi to 1500 psi",
            leachableFluoride: "500 ppm maximum",
            thermalConductivity: "120Kcal/MHR. °C parallel to the surface; 4K cal/m Hr °C perpendicular to the surface",
            electricalResistance: "900X10ohmcm parallel to the surface; 250,000 X10 phm cm perpendicular to the surface"
          },
          advantages: [
            "Wide range of applications",
            "Excellent chemical resistance",
            "Non-fibrous and poses no Health Hazards",
            "Excellent Thermal Conductivity",
            "Compressibility - 40 to 45 %",
            "Recovery on removal - 20 to 40%",
            "Does not scour Valves/Shafts",
            "Does not harden with age or time",
            "No binders or Fillers used",
            "Very Good CREEP RESISTANCE",
            "Low coefficient of Friction",
            "Non-toxic",
            "Antis tick Treatment - no adhesion problem",
            "Good Scratch resistance",
            "Permanently Resilient",
            "Exceptionally Low Chloride content"
          ],
          documentFile: "1664865461.pdf"
        },
        {
          name: "FLOJET - FLEXIBLE MINERAL GRAPHITE SHEETS",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1664865527.png",
          description: "FLOJET EXPANDED FLEXIBLE MINERAL GRAPHITE SHEETS Pure expanded mineral graphite flake or chip particles are subjected to laminar swelling and subsequently calendered to the flexible foil which guarantees a high degree of purity. These sheets have superior properties to asbestos, and have none of the health and handling problems associated with asbestos, an environmentally friendly gasketing material with no binders or fillers, are fire safe, and is non-toxic when in contact with foodstuffs and potable water. These are highly elastomeric materials but their Temperature resistance capability far exceeds that of the most exotic rubber compounds. Added to this is an outstanding resistance to a wide range of organic and inorganic chemicals and it is easy to see why these FLOJET GRAPHITE SHEETS are the most important addition to the seal manufacturers armoury.",
            availability: {
            sheetSize: "1000 mm X 1000 mm",
            thickness: "0.5 mm, 1.0 mm, 1.5 mm, 2.0 mm, 2.5 mm, 3.0 mm, 4.0 mm, 5.0 mm",
            note: "Pre-cut Gaskets can also be supplied."
          },
          features: [
            "Total inertness",
            "Unaffected by Temperature and pressure",
            "No binders or lubricants",
            "Virtually no creep or stress",
            "Will not vulcanize to gasket surfaces",
            "Available as preformed gaskets, and in sheets."
          ],
          benefits: [
            "Multiple Service material",
            "Will not melt or support combustion",
            "Gaskets will not harden, brittle or cold flow",
            "No need to adjust the flange load",
            "Impermeable to liquids",
            "Operating pressure increases",
            "-3234 psi (for perforated inserts)",
            "-2940 psi (for flat steel inserts)"
          ],
          documentFile: "1667555679.pdf"
        },
        {
          name: "FLOJET - MINERAL GRAPHITE TAPES",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1664865552.png",
          description: "These are Slitted Pure Expanded Mineral Graphite Tapes from FLOJET GASKET SHEETS and patterned into a ribbon form which offers excellent sealing capacities under extreme conditions for Longer equipment life and less maintenance. These allow for low Inventories in the plant. These tapes have no Impregnates, binders, additives, oils or greases which could contaminate the process media.",
          availability: {
            plainTapes: "These are slit from Graphite Gasket sheets and are specially used for making SPIRAL WOUND GASKET and high-pressure die-molded rings.",
            corrugatedTapes: "These are cut from the Graphite sheets and then crinkled on a special corrugation machine into different patterns. These are specially used for on-site installation in valves to make die-molded rings.",
            installation: "This tape is wound around the shaft or spindle and is pushed into the stuffing Box interior and compressed with the gland to form an endless molded seal ring directly around the shaft providing a positive seal without disassembling the equipment. It is non-hardening and dimensionally stable.",
            selfAdhesive: "These tapes have self-adhesive Release paper on one side & are used as on-site Gasket making on Flanges & rebuild of existing Gasket area."
          },
          properties: {
            description: "Mineral Graphite Tapes",
            temperature: "-200°C to +500°C",
            pressure: "100 bar (1450 psi)",
            phValue: "0 to 14"
          },
          documentFile: "1667555701.pdf"
        },
        {
          name: "FLOJET - FLEXIBLE MINERAL DIE MOLDED RINGS",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1664865572.png",
          description: "These rings are molded from Pure Expanded Mineral Graphite Tapes and Sheets, which are tapped and compressed under extreme Pressure to the desired sizes using highly Dies. We can also supply Graphite die - molded rings with steel inserts and also odd shape rings.",
          properties: {
            description: "Flexible Mineral Die Molded Rings",
            temperature: "-200°C to +500°C",
            pressure: "140 bar (2030 psi)",
            phValue: "0 to 14"
          },
          documentFile: "1667555727.pdf"
        }
      ],
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=800"
    },
    {
      id: 3,
      name: "100% Expanded Pure PTFE Products",
      description: "Superior quality expanded PTFE gaskets and tapes providing excellent chemical resistance and flexibility.",
      features: [
        "100% Virgin PTFE material", 
        "Universal chemical compatibility", 
        "Wide temperature range: -240°C to 260°C", 
        "Easy installation and removal",
        "Excellent conformability",
        "FDA approved grades available"
      ],
      subProducts: [
        {
          name: "FLOJET - Joint Sealant",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1664865708.png",
          description: "FLOJET JOINTS SEALANT is made from 100% expanded PTFE Fluorocarbon meter, supplied as a continuous low-density cord with a self-adhesive backing strip. This high-performance sealant is designed for various industrial applications including flanges, fume ducts, glass joints, heat exchangers, and manhole covers.",
          properties: {
            description: "100% Expanded PTFE Joint Sealant",
            flangeLoad: "@30N/mm2 (4400psi)",
            pressure: "@3000psi",
            density: "@0.7 gm/cc",
            temperature: "@-240 to +280 Deg. C",
            phValue: "0 to 14"
          },
          applications: [
            "Flanges",
            "Fume Ducks",
            "Glass Joints Heat - Exchangers",
            "Manhole Covers"
          ],
          features: [
            "No age deterioration",
            "Non - Contamination, inert to all Chemicals except molten alkali Metals and elemental fluorine",
            "Easy Installation",
            "Easy to Cut",
            "Self-adhesion",
            "Unlimited Shelf life",
            "Easy to remove"
          ],
          sizeChart: [
            { size: "03X1.5 X 30", dimensions: "5.7 x 0.30", suitableFor: "Up to 50 NB" },
            { size: "05 X20X12", dimensions: "8.9 x 0.50", suitableFor: "200 NB" },
            { size: "07X 2.5X15", dimensions: "12.3 x 0.70", suitableFor: "600 NB" },
            { size: "10 X 3.0X08", dimensions: "17.8 x 0.85", suitableFor: "1500 NB" },
            { size: "12 X 40 X 05", dimensions: "23.1 x 1.00", suitableFor: "Onward 1500 NB" },
            { size: "14 X 50 X 05", dimensions: "26.4 x 1.00", suitableFor: "Onward 1500 NB" },
            { size: "17.8 X 0.85", dimensions: "28.2x 1.25", suitableFor: "Onward 1500 NB" },
            { size: "20 X 7.0 X05", dimensions: "36.0 x 1.40", suitableFor: "Onward 1500 NB" },
            { size: "25 X 10.0 X 05", dimensions: "48.0 x 1.00", suitableFor: "Onward 1500 NB" }
          ],
          installation: [
            "Select the size of flojet sealant cord",
            "Clean surface area - free from oil, dirt, rust etc.",
            "Lubricate the bolts with PTFE tapes/grease",
            "Remove the adhesive back paper strip and gently guide the cord around the flange approx. 2mm away from the boltholes",
            "Apply sealant by crossing ends slightly overlap end to form a continuous seal (For Fragile application - form scarfed joints, for high stress-make wavy, for high irregulars - high built-up)",
            "Tighten the bolts with proper torque till leakage stops. in proper sequences."
          ],
          documentFile: "1667295580.pdf"
        },
        {
          name: "FLOJET - SHEET GASKETING",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1675770717.jpg",
          description: "Flojet 100% Expanded P.T.F.E. sheet is made by using special process that produces a uniform & highly fibrillated microstructure with a grate lot fibers running in multidirectional strength in lubricity creep & cold flow and also directs the possibility of blow out.",
          features: [
            "Can seal uneven damaged flanges",
            "Resist all chemicals except melted alkali metal, fluorine at liquid and gas states.",
            "Meets FDA requirement",
            "Good 8exi",
            "Compressibility - @66%(ASTM)\\",
            "Recovery - 166(ASTM F36)",
            "Service pressure from vacuum to 3000 psi Temperature from :- 240",
            "deg C to 280 deg C. pH range 0 ~ 14.",
            "Easy to cut and install"
          ],
          applications: [
            "Chemicals manufacturing",
            "Food equipment manufacturing Pharmaceutical plants. Distilling.",
            "Bulb & Paper mill.",
            "Power generation"
          ],
          availableSizes: [
            { thickness: "1.5mm & 3mm", sheetSize: "500mm x 500mm" },
            { thickness: "1.5mm & 3mm", sheetSize: "1500mm x 1500mm" }
          ],
          documentFile: "1667295615.pdf"
        },
        {
          name: "FLOJET - GENERAL PURPOSE SELF FORMING PTFE STEM PACKING",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1664865800.png",
          description: "This instant packing is made of 100% PTFE Fluorocarbon in unsintered from having high degree of reliability enable to confirm valve stuffing box flows and irregularities providing an endless molded packing set.",
          features: [
            "Low friction.",
            "Self lubricated & inert. to all chemicals",
            "Molds easily & lasts longer.",
            "Non contaminating.",
            "No wastage, No valve drag"
          ],
          workingTemp: "-240 deg C to 280 deg C.",
          sizeChart: [
            { valveSize: "-1/8\" TO 3/8\"", metPerSpool: "30 Mtrs.", recommendedSizes: "2.0 mm Dia" },
            { valveSize: "3/8\" TO 1\"", metPerSpool: "12 Mtrs.", recommendedSizes: "2.5 mm Dia" },
            { valveSize: "1\" TO 1.5\"", metPerSpool: "30 Mtrs.", recommendedSizes: "3.0 mm Dia" },
            { valveSize: "1.5\" TO 3\"", metPerSpool: "20 Mtrs", recommendedSizes: "4.0 mm Dia" },
            { valveSize: "3\" TO 3.5\"", metPerSpool: "20 Mtrs", recommendedSizes: "5.0 mm Dia" },
            { valveSize: "3.5\" TO 6\"", metPerSpool: "20 Mtrs", recommendedSizes: "6.0 mm Dia" },
            { valveSize: "8\" TO 10\"", metPerSpool: "5 Mtrs", recommendedSizes: "8.0 mm Dia" },
            { valveSize: "10\" TO 12\"", metPerSpool: "5 Mtrs", recommendedSizes: "10.0 mm Dia" },
            { valveSize: "12\" TO 14\"", metPerSpool: "5 Mtrs", recommendedSizes: "12.0 mm Dia" },
            { valveSize: "14\" TO 16\"", metPerSpool: "5 Mtrs", recommendedSizes: "16.0 mm Dia" }
          ],
          note: "Actual size of packing will vary with valve manufactura.",
          documentFile: "1667295639.pdf"
        }
      ],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800"
    },
    {
      id: 4,
      name: "Cold Welding Epoxy Compounds",
      description: "Professional-grade epoxy compounds for metal repair, bonding, and sealing applications without heat treatment.",
      features: [
        "No heat treatment required", 
        "Excellent adhesion to metals", 
        "Chemical and corrosion resistant", 
        "Machinable after curing",
        "Quick setting formulations",
        "Suitable for underwater applications"
      ],
      subProducts: [
        {
          name: "FLOJET - 500",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1665039472.png",
          description: "A machinable grade composite repair compound formulated for maximum durability and performance. Protects surfaces exposed to temperatures up to O 250° C. Flojet 500 is non-shrinking and cures to use in about 2 hours, at which time it can be drilled, tapped or machined with conventional cutting tools. An excellent choice for rebuilding shafts, bearing housings, keyways, as well as mix machined parts that must be brought back to original dimensions. Flojet 500 produces exceptionally high physical properties compressive tensile shear and adhesive strength and is excellent for making permanent repairs to leaking pipes, storage tanks, cracked engine blocks or bonding metals to non-metals, such as concrete to steels.",
          properties: {
            compressiveStrength: "16,000 psi",
            adhesionTensileStrength: "3,000",
            temperatureResistance: "Dry 250°C / Wet 120° C",
            workingTime: "10 to 15 min. at 20° C."
          },
          applications: {
            product: "FLOJET 500",
            compound: "TROWEL APPLIED Heat Resistance @ 250° C",
            recommendedApplications: "Parts and equipment rebuilt with Flojet 500 can be easily machined back to their original dimensions. Worn bearing housings, damaged keyways, stripped threads, scored hydraulic rams, worn shafts, valve and pump components. For repairing cracks in engine blocks and sealing leaks in tanks, radiators, condensers, heat exchangers, pipes and flanges. Also, ideal for chocking and levelling machinery and other uneven surfaces."
          },
          documentFile: "1667290932.pdf"
        },
        {
          name: "FLOJET - 600",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1665039644.png",
          description: "A rapid curing two-component system. When time is a critical factor, use FLOJET 600 to repair in minutes - leaking tanks, cracked castings, scored shafts, leaking process pipelines, and oversize holes. Flojet 600 is non-shrinking and cures to use in about 3 to 4 minutes. Repairs are easily machined.",
          properties: {
            compressiveStrength: "9,000 psi",
            adhesionTensileStrength: "2600 psi",
            temperatureResistance: "Wet 60 °C or dry 200 °C",
            workingTime: "3 to 4 min. at 20° C",
            packing: "500 gms packs"
          },
          applications: {
            product: "FLOJET 600",
            compound: "RAPID CURE REPAIR GRADE Cures in 3 to 4 mins.",
            recommendedApplications: "Repairing gauges, dents and holes. Blow- holes surface defects and cracks in metal casting. Cracked battery cases, leaking fuel and storage tanks, leaking pipes, and scored pistons and cylinders. Leaking gutters and downspouts. Stripped threads. Repair improperly drilled holes. Leaks in radiators."
          },
          documentFile: "1667290973.pdf"
        },
        {
          name: "FLOJET - 700",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1665040050.png",
          description: "A two-component system designed for rebuilding surfaces exposed to wet or dry particle abrasion, friction, erosion and cavitation from fast-moving liquids. Highly resistant to corrosive attack and heat O resistant to 250° C Flojet 700 is a non-shrinking composite formulated with abrasion-resistant ceramic fibers in various precalculated shapes and sizes. The unique chemistry produces a coating with ultra-high compressive strengths to support heavy loads and excellent adhesive strength. Ideal applications on heat exchangers, pump casings, valve bodies, impellers, etc.",
          properties: {
            compressiveStrength: "18,000 psi",
            adhesionTensileStrength: "3000 psi",
            temperatureResistance: "Dry 250° C / Wet 120° C",
            workingTime: "Approx 20 min. at 20°C",
            packing: "500 gm packs"
          },
          applications: {
            product: "FLOJET 700",
            compound: "POLY CERAMIC For abrasion, corrosion, erosion, cavitation, and frictional wear resistance. O Heat Resistance @ 250° C",
            recommendedApplications: "Ball and gate valves, valve stems. Pump cases, impellers, feed chutes, liners, hoppers, slurry lines, pipe elbows, mixing equipment paddles, feed screws, augers, cyclones, and fan blades. Ship hull and propeller maintenance. Lining tanks and surface areas that are too thin to be welded"
          },
          documentFile: "1667290893.pdf"
        },
        {
          name: "FLOJET - 800",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1665040398.png",
          description: "A brushable ceramic system is designed for coating new and worn surfaces exposed to wet or dry particle abrasion, frictional wear, erosion, cavitation and corrosion. Cures to a smooth slick finish.",
          properties: {
            adhesionTensileStrength: "3200 psi",
            temperatureResistance: "Dry 250° C / Wet 120° C",
            workingTime: "Approx 10 to 15 min at 20° C",
            packing: "1 Kg pack"
          },
          applications: {
            product: "FLOJET 800",
            compound: "PERISHABLE CERAMIC For abrasion, corrosion, erosion, cavitation, and frictional wear resistance. O Heat Resistance @ 250° C",
            recommendedApplications: "Has uniform consistency for coating pumps, valves, slurry lines, augers, feed screws, flue gas scrubbers, demineralizing beds, vacuum pumps, salt spreaders, exhaust fans, fertilizer dryers, heat exchanges, impellers, and chemical tanks. Ideal final coat for FLOJET 700"
          },
          documentFile: "1667291013.pdf"
        },
        {
          name: "FLOJET - MULTICHEM (GL)",
          image: "http://68.178.154.199/development/flojet/public/asset_admin/product_img/1665040587.png",
          description: "FLOJET MULTICHEM GL is a unique two-component having a unique composite formulation providing the highest level of chemical resistance, especially useful for repairing glass-lined equipment.",
          characteristics: [
            "Very good coverage rate.",
            "Temperature resistance up to 175° C in wet conditions.",
            "Working time @ 30 minutes.",
            "Full load @ 1 day.",
            "Adhesion Tensile strength @ 3000 psi.",
            "It can be used in a place where no roughing is possible.",
            "It is a solvent-free high-level chemical-resistant coating and gives the finishing as glass only.",
            "Standard packing 1 Kg. Color Blue.",
            "Mixing Ratio by weight - Base 900 gm and Activator 100 gm."
          ],
          properties: {
            adhesionTensileStrength: "3000 psi",
            temperatureResistance: "Up to 175° C in wet conditions",
            workingTime: "30 minutes",
            fullLoad: "1 day",
            packing: "1 Kg (Base 900 gm + Activator 100 gm)",
            color: "Blue"
          },
          applications: {
            product: "FLOJET MULTICHEM (GL)",
            compound: "CHEMICAL RESISTANCE COATING For glass-lined equipment repair",
            recommendedApplications: "It can resist @ 98% H2SO4, @ 36% HCL, @ 75% ORTHO PHOSPHORUS and other tough chemical and Acids only, not suitable for Nitric Acid is more than 25% to 30%. Useful for repairing Vessels, tanks, waste spillage areas, and others requiring resistance to other chemicals. It is a chemical resistance lining, and a corrosion protection system."
          },
          accessories: [
            {
              name: "Universal Cleaner",
              description: "For degreasing and cleaning surfaces prior to application, available in liter packs."
            },
            {
              name: "Release Agents",
              description: "To be applied where flojet Compounds are not adhered to."
            },
            {
              name: "Reinforcement Tape",
              description: "Increases tensile strength and pressure resistance of flojet metals, and recommended for use on large cracks."
            },
            {
              name: "Flojet Sealants",
              description: "A soft expanded PTFE used for filling holes and gaps on which flojet compounds are to be applied."
            }
          ],
          documentFile: "1665040587.pdf"
        }
      ],
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800"
    }
  ];

  return (
    <section id="products" className="section bg-white">
      <div className="container-custom">
        {/* Main Products Screen */}
        {currentScreen === 'main' && (
          <>
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Flojet® Product Range</h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Discover our four main product categories with comprehensive sub-products designed to meet 
                diverse industrial sealing and repair requirements with over 35 years of engineering expertise.
              </p>
            </div>

            {/* Key Features Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">ISO Certified Quality</h3>
                <p className="text-gray-600">All products meet international quality standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">35+ Years Experience</h3>
                <p className="text-gray-600">Trusted by industries across India</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times for all orders</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 fade-in">
              {products.map(product => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    {/* Main Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button asChild className="bg-red-500 hover:bg-red-600 text-white flex-1">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-red-500 text-red-500 hover:bg-red-50"
                        onClick={() => {
                          if (product.hasGenerations) {
                            goToGenerations();
                          } else {
                            // Handle regular products
                            goToRegularProducts(product.id);
                          }
                        }}
                      >
                        {product.hasGenerations ? 'View Generations' : 'View Products'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Generations Screen */}
        {currentScreen === 'generations' && (
          <div className="fade-in">
            <div className="text-center mb-8">
              <button
                onClick={goBack}
                className="mb-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
              >
                ← Back to Products
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Non Asbestos Braided Gland Packing Generations</h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Choose from our two generations of high-performance packing solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.find(p => p.id === 1)?.generations?.map((generation, genIndex) => (
                <Card key={genIndex} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-32 bg-gradient-to-br from-red-500 to-red-600 relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold">{generation.name}</h4>
                      <p className="text-red-100 text-sm">{generation.count} Products Available</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{generation.description}</p>
                    
                    {/* Generation Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-800 mb-2">Featured Products:</h5>
                      <ul className="space-y-1">
                        {generation.subProducts.slice(0, 3).map((product, index) => (
                          <li key={index} className="text-gray-700 flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-xs">{typeof product === 'string' ? product : product.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button asChild className="bg-red-500 hover:bg-red-600 text-white flex-1">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-red-500 text-red-500 hover:bg-red-50"
                        onClick={() => goToProducts(genIndex)}
                      >
                        View All Products
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Products Screen */}
        {currentScreen === 'products' && selectedGeneration !== null && (
          <div className="fade-in">
            <div className="text-center mb-8">
              <button
                onClick={goBack}
                className="mb-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
              >
                ← Back to Generations
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {products.find(p => p.id === 1)?.generations?.[selectedGeneration]?.name} Products
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                {products.find(p => p.id === 1)?.generations?.[selectedGeneration]?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.find(p => p.id === 1)?.generations?.[selectedGeneration]?.subProducts.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-4">
                    {typeof product === 'object' && product.image && (
                      <div className="mb-3">


                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex items-start mb-3">
                      <span className="h-2 w-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <h4 className="text-sm font-semibold text-gray-800">{typeof product === 'string' ? product : product.name}</h4>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 flex-1">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-red-500 text-red-500 hover:bg-red-50 text-xs px-3 py-1"
                        onClick={() => goToProductDetail(product)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Products Screen */}
        {currentScreen === 'regularProducts' && selectedProduct !== null && (
          <div className="fade-in">
            <div className="text-center mb-8">
              <button
                onClick={goBack}
                className="mb-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
              >
                ← Back to Products
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {products.find(p => p.id === selectedProduct)?.name} - Product Range
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                {products.find(p => p.id === selectedProduct)?.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {products.find(p => p.id === selectedProduct)?.subProducts.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    {typeof product === 'object' && product.image && (
                      <div className="mb-4">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex items-start mb-4">
                      <span className="h-3 w-3 bg-red-500 rounded-full mr-3 mt-1 flex-shrink-0"></span>
                      <h4 className="text-lg font-semibold text-gray-800">{typeof product === 'string' ? product : product.name}</h4>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="bg-red-500 hover:bg-red-600 text-white flex-1">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-red-500 text-red-500 hover:bg-red-50"
                        onClick={() => {
                          console.log('Clicking on product:', product);
                          goToProductDetail(product);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Product Detail Screen */}
        {currentScreen === 'productDetail' && selectedProductDetail && (
          <div className="fade-in">
            <div className="text-center mb-8">
              <button
                onClick={goBack}
                className="mb-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
              >
                ← Back to Products
              </button>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {selectedProductDetail.name}
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Product Image */}
              <div className="flex justify-center items-start">
                <img 
                  src={selectedProductDetail.image} 
                  alt={selectedProductDetail.name}
                  className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
                  style={{ maxHeight: '400px' }}
                />
              </div>

              {/* Product Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-4">
                    {selectedProductDetail.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProductDetail.description}
                  </p>
                </div>

                {/* Features Section */}
                {selectedProductDetail.features && (
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-2">FEATURES :</h4>
                    <ul className="space-y-2">
                      {selectedProductDetail.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Characteristics Section */}
                {selectedProductDetail.characteristics && (
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-2">CHARACTERISTICS :</h4>
                    <ul className="space-y-2">
                      {selectedProductDetail.characteristics.map((characteristic: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-600 mr-2 font-medium">{index + 1}.</span>
                          <span className="text-gray-700">{characteristic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applications Section */}
                {selectedProductDetail.applications && (
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-2">APPLICATIONS :</h4>
                    {Array.isArray(selectedProductDetail.applications) ? (
                      <ul className="space-y-2">
                        {selectedProductDetail.applications.map((application: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{application}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">PRODUCT</th>
                                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">COMPOUND</th>
                                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700">RECOMMENDED APPLICATIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700 font-medium">
                                  {selectedProductDetail.applications.product}
                                </td>
                                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">
                                  {selectedProductDetail.applications.compound}
                                </td>
                                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-700">
                                  {selectedProductDetail.applications.recommendedApplications}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Accessories Section */}
                {selectedProductDetail.accessories && (
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-4">ACCESSORIES FOR USE WITH FLOJET METAL COMPOUNDS</h4>
                    <div className="space-y-4">
                      {selectedProductDetail.accessories.map((accessory: any, index: number) => (
                        <div key={index} className="border-l-4 border-red-500 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-2">
                            - {accessory.name}:
                          </h5>
                          <p className="text-gray-700">{accessory.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Composition for Expanded Graphite Products */}
                {selectedProductDetail.composition && (
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-2">COMPOSITION</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProductDetail.composition}
                    </p>
                  </div>
                )}

                {/* Availability for Expanded Graphite Products */}
                {selectedProductDetail.availability && (
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-2">AVAILABILITY</h4>
                    <div className="space-y-3">
                      {/* For sheet products */}
                      {selectedProductDetail.availability.sheetSize && (
                        <>
                          <p className="text-gray-700">
                            <span className="font-medium">Sheets Size:</span> {selectedProductDetail.availability.sheetSize}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Thickness:</span> {selectedProductDetail.availability.thickness}
                          </p>
                          {selectedProductDetail.availability.note && (
                            <p className="text-gray-700 italic">{selectedProductDetail.availability.note}</p>
                          )}
                        </>
                      )}
                      
                      {/* For tape products */}
                      {selectedProductDetail.availability.plainTapes && (
                        <>
                          <div className="mb-3">
                            <p className="text-gray-700"><span className="font-medium">PLAIN TAPES:</span> {selectedProductDetail.availability.plainTapes}</p>
                          </div>
                          <div className="mb-3">
                            <p className="text-gray-700"><span className="font-medium">CORRUGATED TAPES:</span> {selectedProductDetail.availability.corrugatedTapes}</p>
                          </div>
                          <div className="mb-3">
                            <p className="text-gray-700 leading-relaxed">{selectedProductDetail.availability.installation}</p>
                          </div>
                          <div className="mb-3">
                            <p className="text-gray-700"><span className="font-medium">SELF-ADHESIVE CORRUGATED TAPES:</span> {selectedProductDetail.availability.selfAdhesive}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Available Sizes for PTFE Sheet Products */}
                {selectedProductDetail.availableSizes && (
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-2">AVAILABLE SIZES</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Sheet Thickness</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Sheet Size</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedProductDetail.availableSizes.map((item: any, index: number) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                              <td className="px-4 py-3 text-gray-700 border-b font-medium">{item.thickness}</td>
                              <td className="px-4 py-3 text-gray-700 border-b">{item.sheetSize}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Working Temperature for PTFE Stem Packing */}
                {selectedProductDetail.workingTemp && (
                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-2">WORKING TEMP</h4>
                    <p className="text-gray-700">{selectedProductDetail.workingTemp}</p>
                  </div>
                )}

                {/* Document File */}
                {selectedProductDetail.documentFile && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-600 mb-2">DOCUMENT FILE</h4>
                    <a 
                      href={`http://68.178.154.199/development/flojet/public/asset_admin/product_pdf/${selectedProductDetail.documentFile}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      {selectedProductDetail.documentFile}
                      <Download className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Size Chart for PTFE Products */}
            {selectedProductDetail.sizeChart && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  {selectedProductDetail.sizeChart[0].valveSize ? 'VALVE SIZE CHART' : 'NOMINAL SIZES CHART'}
                </h3>
                {!selectedProductDetail.sizeChart[0].valveSize && (
                  <p className="text-gray-700 mb-4">Width(MM) X Thickness(MM)</p>
                )}
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        {selectedProductDetail.sizeChart[0].valveSize ? (
                          <>
                            <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">VALVE SIZE</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">MET. PER SPOOL</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">RECOMMENDED SIZES FOR STEM PACKING</th>
                          </>
                        ) : (
                          <>
                            <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Nominal Sizes (In MM) Met/Spool W x T</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Dimensions (Width x Thickness)</th>
                            <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Suitable for Flanges</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProductDetail.sizeChart.map((item: any, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                          {item.valveSize ? (
                            <>
                              <td className="px-4 py-3 text-gray-700 border-b font-medium">{item.valveSize}</td>
                              <td className="px-4 py-3 text-gray-700 border-b">{item.metPerSpool}</td>
                              <td className="px-4 py-3 text-gray-700 border-b">{item.recommendedSizes}</td>
                            </>
                          ) : (
                            <>
                              <td className="px-4 py-3 text-gray-700 border-b font-medium">{item.size}</td>
                              <td className="px-4 py-3 text-gray-700 border-b">{item.dimensions}</td>
                              <td className="px-4 py-3 text-gray-700 border-b">{item.suitableFor}</td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {selectedProductDetail.note && (
                  <p className="text-sm text-gray-600 mt-2">
                    {selectedProductDetail.note}
                  </p>
                )}
                {!selectedProductDetail.note && !selectedProductDetail.sizeChart[0].valveSize && (
                  <p className="text-sm text-gray-600 mt-2">
                    * In case of non-Standard flanges and NB diameter over 24" or 300mm, the joint sealant size must be between 1/3 & 2 of the flange contact width.
                  </p>
                )}
              </div>
            )}

            {/* Installation Instructions for PTFE Products */}
            {selectedProductDetail.installation && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  INSTALLATION INSTRUCTIONS
                </h3>
                <p className="text-gray-700 mb-4">
                  The unique features of flojet joint sealant make it easier to handle & install with ease in labor, cutting & applying.
                </p>
                
                <div className="space-y-3">
                  {selectedProductDetail.installation.map((step: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Properties for PTFE Products */}
            {selectedProductDetail.properties && selectedProductDetail.properties.flangeLoad && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  PROPERTIES
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b">Flange Load</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b">Pressure</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b">Density</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b">Temp. Res</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b">pH Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-center text-gray-700 border-b">{selectedProductDetail.properties.flangeLoad}</td>
                        <td className="px-4 py-3 text-center text-gray-700 border-b">{selectedProductDetail.properties.pressure}</td>
                        <td className="px-4 py-3 text-center text-gray-700 border-b">{selectedProductDetail.properties.density}</td>
                        <td className="px-4 py-3 text-center text-gray-700 border-b">{selectedProductDetail.properties.temperature}</td>
                        <td className="px-4 py-3 text-center text-gray-700 border-b">{selectedProductDetail.properties.phValue}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Detailed Properties for Expanded Graphite Products */}
            {selectedProductDetail.properties && selectedProductDetail.properties.purity && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  PROPERTIES
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700 border-b">PURITY</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.purity}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-700 border-b">TEMPERATURE RANGE</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.temperatureRange}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700 border-b">OPERATING PRESSURE</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.operatingPressure}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-700 border-b">pH VALUE</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.phValue}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700 border-b">LEACHABLE CHLORIDE</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.leachableChloride}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-700 border-b">TENSILE STRENGTH</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.tensileStrength}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700 border-b">LEACHABLE FLUORIDE</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.leachableFluoride}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-700 border-b">THERMAL CONDUCTIVITY</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.thermalConductivity}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-gray-700 border-b">ELECTRICAL RESISTANCE</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.electricalResistance}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Advantages for Expanded Graphite Products */}
            {selectedProductDetail.advantages && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  ADVANTAGES
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedProductDetail.advantages.map((advantage: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Charts Section */}
            {selectedProductDetail.dimensionChart && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  CHART FOR METERS PER KG(+_5%)
                </h3>
                <p className="text-gray-700 mb-4">DIMENSION IN SQUARE BRAIDED MM</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">FLOJET STYLE</th>
                        {selectedProductDetail.dimensionChart.map((item: any, index: number) => (
                          <th key={index} className="px-4 py-3 text-center font-semibold text-gray-700 border-b">
                            {item.size}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-700 border-b">TA</td>
                        {selectedProductDetail.dimensionChart.map((item: any, index: number) => (
                          <td key={index} className="px-4 py-3 text-center text-gray-700 border-b">
                            {item.metersPerKg}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Properties Chart */}
            {selectedProductDetail.properties && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  PROPERTIES CHART
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">FLOJET STYLE</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">DESCRIPTION</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b">TEMP DEG)</th>
                        {selectedProductDetail.properties.speed && (
                          <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b">SPEED(M/S)</th>
                        )}
                        <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b">PRESSURE(PSI)</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-700 border-b">pH VALUE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray-700 border-b">TA</td>
                        {selectedProductDetail.dimensionChart.map((item: any, index: number) => (
                          <td key={index} className="px-4 py-3 text-center text-gray-700 border-b">
                            {item.metersPerKg}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Properties Chart for Epoxy Compounds */}
            {selectedProductDetail.properties && selectedProductDetail.properties.adhesionTensileStrength && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-red-600 mb-4">
                  PROPERTIES
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                    <tbody>
                      {selectedProductDetail.properties.compressiveStrength && (
                        <tr className="bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-red-600 border-b">Compressive Strength</td>
                          <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.compressiveStrength}</td>
                        </tr>
                      )}
                      <tr className={selectedProductDetail.properties.compressiveStrength ? "" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-semibold text-red-600 border-b">Adhesion Tensile Strength</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.adhesionTensileStrength}</td>
                      </tr>
                      <tr className={selectedProductDetail.properties.compressiveStrength ? "bg-gray-50" : ""}>
                        <td className="px-4 py-3 font-semibold text-red-600 border-b">Temperature Resistance</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.temperatureResistance}</td>
                      </tr>
                      <tr className={selectedProductDetail.properties.compressiveStrength ? "" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-semibold text-red-600 border-b">Working Time</td>
                        <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.workingTime}</td>
                      </tr>
                      {selectedProductDetail.properties.fullLoad && (
                        <tr className={selectedProductDetail.properties.compressiveStrength ? "bg-gray-50" : ""}>
                          <td className="px-4 py-3 font-semibold text-red-600 border-b">Full Load</td>
                          <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.fullLoad}</td>
                        </tr>
                      )}
                      {selectedProductDetail.properties.color && (
                        <tr className="bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-red-600 border-b">Color</td>
                          <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.color}</td>
                        </tr>
                      )}
                      {selectedProductDetail.properties.packing && (
                        <tr className="bg-gray-50">
                          <td className="px-4 py-3 font-semibold text-red-600 border-b">Packing</td>
                          <td className="px-4 py-3 text-gray-700 border-b">{selectedProductDetail.properties.packing}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Custom Sealing Solutions Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Custom Sealing Solutions
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              With over 35 years of expertise, we specialize in creating custom sealing solutions 
              tailored to your specific industrial requirements. Our engineering team works closely 
              with you to develop the perfect sealing solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">Custom Design</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">Material Selection</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">Technical Support</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700">Quality Assurance</span>
            </div>
          </div>
          <Button asChild className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
            <Link to="/contact">Contact Our Engineering Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
