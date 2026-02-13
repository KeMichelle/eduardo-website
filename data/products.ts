export interface EduProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  warnings?: string[];
  specifications?: Record<string, string>;
  images: string[];
  tags: string[];
  translations?: {
    [locale: string]: {
      name?: string;
      category?: string;
      shortDescription?: string;
      fullDescription?: string;
      features?: string[];
      benefits?: string[];
      warnings?: string[];
    };
  };
}

const ES_COMMON_WARNINGS = {
  magnetsImplants:
    'Los imanes están contraindicados para personas que usan o tienen: marcapasos, neuroestimuladores, desfibriladores, bombas de insulina, implantes cocleares u otros implantes que funcionen con baterías.',
  magneticInterference:
    'El campo magnético puede interferir en el funcionamiento de dispositivos que utilicen baterías.',
  resultsMayVary:
    'Los resultados pueden variar de una persona a otra y no están garantizados.',
  notMedicalTreatment:
    'Este producto no sustituye ningún tratamiento médico. Consulte siempre a su profesional de salud.',
  noReturnFinalSale: 'Venta final: este producto no admite devoluciones.',
  taxesAndFees: 'Los precios no incluyen impuestos ni gastos de envío.',
};

export const products: EduProduct[] = [
  {
    id: '1',
    name: 'S.W.S. Alcaline Max',
    slug: 'alcaline-max',
    category: 'Water Filtration',
    shortDescription:
      'Revolutionary water filter designed to improve your overall well-being and elevate your daily life.',
    fullDescription:
      'Introducing Alcaline Max Black - The revolutionary water filter designed to improve your overall well-being and elevate your daily life. Brought to you by E-Energy by Nipponflex, this cutting-edge filtration system is ready to transform the way you hydrate. With its advanced technology, Alcaline Max Black boasts incredible features that set it apart from the rest.',
    features: [
      'Removes chlorine for pure and safe water',
      'Improves pH balance of water',
      'Provides antioxidants that fight free radicals',
      'Helps slow aging process',
      'Strengthens immune system',
      'Promotes radiant skin',
      'Sleek, modern design',
      'Quick and easy installation',
      'Fits any water filter base',
    ],
    benefits: [
      'Pure and safe hydration',
      'Anti-aging properties',
      'Enhanced immune system',
      'Better skin health',
      'Convenient daily use',
    ],
    specifications: {
      Compatibility: 'Any water filter base',
      Installation: 'Quick and easy',
      Design: 'Modern and sleek',
    },
    images: ['/assets/images/products/alcineMaxsws.png'],
    tags: ['water filter', 'health', 'wellness', 'antioxidants'],
    translations: {
      es: {
        fullDescription:
          'Te presentamos Alcaline Max Black: el filtro de agua revolucionario diseñado para mejorar tu bienestar general y elevar tu día a día. Desarrollado por E‑Energy by Nipponflex, este avanzado sistema de filtración está listo para transformar la forma en que te hidratas. Gracias a su tecnología de última generación, Alcaline Max Black ofrece características excepcionales que lo diferencian de los filtros tradicionales.',
        features: [
          'Elimina el cloro para ofrecer agua pura y segura',
          'Mejora el equilibrio de pH del agua',
          'Aporta antioxidantes que combaten los radicales libres',
          'Ayuda a desacelerar el proceso de envejecimiento',
          'Fortalece el sistema inmunológico',
          'Favorece una piel más luminosa',
          'Diseño moderno y elegante',
          'Instalación rápida y sencilla',
          'Compatible con cualquier base de filtro de agua',
        ],
        benefits: [
          'Hidratación pura y segura',
          'Propiedades antienvejecimiento',
          'Sistema inmunológico fortalecido',
          'Mejor salud y aspecto de la piel',
          'Uso diario cómodo y práctico',
        ],
      },
    },
  },
  {
    id: '2',
    name: 'Alcaline Max Jar',
    slug: 'alcaline-max-jar',
    category: 'Water Filtration',
    shortDescription:
      'Revolutionary water filter jar designed to improve your overall well-being and elevate your daily life.',
    fullDescription:
      'Introducing Alcaline Max Jar - the revolutionary water filter designed to improve your overall well-being and elevate your daily life. Brought to you by E-Energy by Nipponflex, this cutting-edge filtration system is ready to transform the way you hydrate. With its advanced technology, the Alcaline Max Jar boasts incredible features that set it apart from the rest.',
    features: [
      'Removes chlorine for pure and safe water',
      'Improves pH balance of water',
      'Provides antioxidants that fight free radicals',
      'Helps slow aging process',
      'Strengthens immune system',
      'Promotes radiant skin',
      'Sleek, modern jar design',
      'Easy to use and maintain',
      'Fits any water filter base',
    ],
    benefits: [
      'Pure and safe hydration',
      'Anti-aging properties',
      'Enhanced immune system',
      'Better skin health',
      'Convenient daily use',
    ],
    specifications: {
      Type: 'Water filter jar',
      Compatibility: 'Any water filter base',
      Design: 'Modern jar style',
    },
    images: ['/assets/images/products/alcalineMaxJar.png'],
    tags: ['water filter', 'jar', 'health', 'wellness'],
    translations: {
      es: {
        fullDescription:
          'Te presentamos Alcaline Max Jar, la jarra filtrante revolucionaria diseñada para mejorar tu bienestar general y elevar la calidad del agua que bebes a diario. Creada por E‑Energy by Nipponflex, esta solución de filtración avanzada transforma tu hidratación diaria con una combinación de tecnología inteligente y diseño práctico.',
        features: [
          'Elimina el cloro para ofrecer agua más pura y segura',
          'Contribuye a mejorar el pH del agua',
          'Proporciona antioxidantes que ayudan a combatir los radicales libres',
          'Apoya el retraso de los signos de envejecimiento',
          'Fortalece el sistema inmunológico',
          'Favorece una piel más sana y radiante',
          'Diseño moderno en formato jarra',
          'Fácil de usar y mantener',
          'Compatible con cualquier base de filtro de agua',
        ],
        benefits: [
          'Acceso cómodo a agua limpia y segura',
          'Apoyo diario a la defensa antioxidante del organismo',
          'Bienestar general mejorado',
          'Mantenimiento sencillo y práctico',
          'Ideal para el uso familiar y cotidiano',
        ],
      },
    },
  },
  {
    id: '3',
    name: 'Water Bottle with Ion Balls',
    slug: 'water-bottle-ion-balls',
    category: 'Wellness Accessories',
    shortDescription:
      'The ultimate wellness companion with ION BALLS device and stylish squeeze bottle.',
    fullDescription:
      'The ultimate wellness companion is the ION BALLS device, now available with a stylish squeeze bottle. This incredible device features a baton with eight ion balls and a powerful magnet with a 3400-gauss strength, all packed into one portable and convenient package.',
    features: [
      '8 ion balls for negative ion emission',
      '3400-gauss strength magnet',
      '500ml (16.9 oz) squeeze bottle',
      'BPA-free plastic construction',
      'Made in Japan ion balls',
      'Portable and convenient design',
      'Stylish and functional',
    ],
    benefits: [
      'Promotes relaxation',
      'Reduces stress',
      'Enhances natural balance',
      'Boosts energy and vitality',
      'Improved well-being',
    ],
    specifications: {
      'Bottle Size': '500ml (16.9 oz)',
      'Ion Balls': '8 spheres made in Japan',
      'Magnet Strength': '3400-gauss Super Neodymium',
      Material: 'BPA-free plastic',
      'Ion Balls Composition':
        '27.1% Celsian, 26.2% Clino-Enstatite, 46.7% Photo-Enstatite',
    },
    images: ['/assets/images/products/alkalineMaxWater.png'],
    tags: ['water bottle', 'ion balls', 'magnet', 'wellness'],
    translations: {
      es: {
        fullDescription:
          'El compañero de bienestar definitivo es el dispositivo ION BALLS, ahora disponible con una elegante botella exprimible. Este increíble conjunto incluye un bastón con ocho Ion Balls y un potente imán de 3400 gauss, todo en un formato portátil y cómodo para el día a día.',
        features: [
          '8 Ion Balls para emisión de iones negativos',
          'Imán de 3400 gauss de alta potencia',
          'Botella exprimible de 500 ml (16,9 oz)',
          'Fabricación en plástico libre de BPA',
          'Ion Balls fabricadas en Japón',
          'Diseño portátil y práctico',
          'Estética moderna y funcional',
        ],
        benefits: [
          'Favorece la relajación',
          'Ayuda a reducir el estrés',
          'Contribuye al equilibrio natural del organismo',
          'Apoya los niveles de energía y vitalidad',
          'Sensación general de mayor bienestar',
        ],
      },
    },
  },
  {
    id: '4',
    name: 'Nipponflex Triple S Firm',
    slug: 'nipponflex-triple-s-firm',
    category: 'Mattresses',
    shortDescription:
      'The most advanced orthopedic mattress with FIR POWER, magnetic therapy, and ION BALLS technologies.',
    fullDescription:
      'Introducing the Nipponflex Triple S Firm mattress, the most advanced orthopedic mattress in the market. This mattress is not only the largest product with FIR POWER on the planet, but it also consists of 10 layers that combine comfort, orthopedics, and health benefits. Despite its name suggesting firmness, you can choose the soft version, which will still provide orthopedic support tailored to your needs.',
    features: [
      '10-layer construction',
      'FIR POWER technology',
      'MFP (magnetic therapy)',
      'ION BALLS technology',
      'Built-in vibrating massager with 5 zones',
      'Silver ion-infused Nipponflex fabric',
      'Anti-dust mite properties',
      'Anti-fungal and antibacterial',
      'Made in the United States',
      'Split bed options available',
    ],
    benefits: [
      'Better blood circulation',
      'Pain reduction',
      'Improved sleep quality',
      'Muscle tension relief',
      'Faster recovery from fatigue',
      'Enhanced sleep and reduced stress',
      'Improved immune function',
    ],
    specifications: {
      Layers: '10-layer construction',
      Technologies: 'FIR POWER, MFP, ION BALLS',
      'Massager Zones': '5 different body zones',
      Fabric: 'Silver ion-infused Nipponflex',
      Manufacturing: 'Made in USA',
    },
    images: ['/assets/images/products/NipponflexTripleSFirm.png'],
    tags: ['mattress', 'orthopedic', 'FIR POWER', 'magnetic therapy'],
    translations: {
      es: {
        fullDescription:
          'Te presentamos el colchón Nipponflex Triple S Firm, uno de los colchones ortopédicos más avanzados del mercado. Además de ser el mayor producto con FIR POWER del planeta, está compuesto por 10 capas que combinan confort, soporte ortopédico y beneficios para la salud. A pesar de su nombre, que sugiere firmeza, también puedes elegir la versión más suave, que sigue ofreciendo un soporte ortopédico adaptado a tus necesidades.',
        features: [
          'Construcción de 10 capas',
          'Tecnología FIR POWER integrada',
          'MFP (terapia magnética)',
          'Tecnología ION BALLS',
          'Masajeador vibratorio incorporado con 5 zonas',
          'Tejido Nipponflex con iones de plata',
          'Propiedades antiácaros',
          'Acción antifúngica y antibacteriana',
          'Fabricado en Estados Unidos',
          'Opciones de cama dividida disponibles',
        ],
        benefits: [
          'Mejor circulación sanguínea',
          'Reducción de dolores y molestias',
          'Mejor calidad de sueño',
          'Alivio de la tensión muscular',
          'Recuperación más rápida del cansancio diario',
          'Sueño más profundo y menor nivel de estrés',
          'Apoyo adicional al sistema inmunológico',
        ],
      },
    },
  },
  {
    id: '5',
    name: 'Nipponflex Triple S Spring - HYBRID',
    slug: 'nipponflex-triple-s-spring-hybrid',
    category: 'Mattresses',
    shortDescription:
      'The most advanced hybrid orthopedic mattress with 10 layers and cutting-edge technologies.',
    fullDescription:
      'Introducing the Nipponflex Triple S SPRING mattress, the most advanced hybrid orthopedic mattress on the market. Not only is it the largest FIR POWER product on the planet, but it also boasts 10 layers that deliver unparalleled comfort, orthopedic support, and health benefits. The SSS Spring line is a limited edition, so make sure to take advantage of it while supplies last.',
    features: [
      'Hybrid spring construction',
      '10-layer design',
      'FIR POWER technology',
      'MFP technology',
      'ION BALLS technology',
      'Built-in vibromassager with 5 zones',
      'Silver ion-embedded fabric',
      'Limited edition',
      'Split bed options with dual massagers',
    ],
    benefits: [
      'Unparalleled comfort',
      'Superior orthopedic support',
      'Health benefits from advanced technologies',
      'Protection against dust mites, fungi, and bacteria',
      'Personalized massage experience',
    ],
    specifications: {
      Type: 'Hybrid spring mattress',
      Layers: '10-layer construction',
      Technologies: 'FIR POWER, MFP, ION BALLS',
      Fabric: 'Silver ion-embedded Nipponflex',
      Edition: 'Limited edition',
    },
    images: ['/assets/images/products/NipponFlexTripleSSpringHybrid.png'],
    tags: ['mattress', 'hybrid', 'spring', 'orthopedic', 'limited edition'],
    translations: {
      es: {
        fullDescription:
          'Te presentamos el colchón Nipponflex Triple S SPRING, uno de los colchones ortopédicos híbridos más avanzados del mercado. Además de ser uno de los mayores productos con FIR POWER del planeta, cuenta con 10 capas que ofrecen un confort excepcional, soporte ortopédico y beneficios para la salud. La línea Triple S Spring es una edición limitada, por lo que es una oportunidad única para disfrutar de esta combinación exclusiva de tecnologías.',
        features: [
          'Estructura híbrida con resortes',
          'Diseño de 10 capas',
          'Tecnología FIR POWER',
          'Tecnología MFP',
          'Tecnología ION BALLS',
          'Vibromasajeador incorporado con 5 zonas',
          'Tejido con iones de plata',
          'Edición limitada',
          'Opciones de cama dividida con doble sistema de masaje',
        ],
        benefits: [
          'Confort superior y personalizado',
          'Soporte ortopédico avanzado',
          'Beneficios de salud derivados de tecnologías de vanguardia',
          'Protección frente a ácaros, hongos y bacterias',
          'Experiencia de masaje personalizable',
        ],
      },
    },
  },
  {
    id: '6',
    name: 'Nipponflex M1',
    slug: 'nipponflex-m1',
    category: 'Mattresses',
    shortDescription:
      'Modular orthopedic mattress with cutting-edge technologies for hard-to-reach places.',
    fullDescription:
      'Introducing the Nipponflex M1 Mattress, the epitome of authentic orthopedic comfort brought to even the most hard-to-reach places. Our carefully crafted modular design consists of 2 pillow top sections and two base sections, making it incredibly easy to assemble and access areas where traditional orthopedic mattresses struggle.',
    features: [
      'Modular design (2 pillow top + 2 base sections)',
      'FIR POWER technology',
      'MFP (magnetic therapy) technology',
      'ION BALLS technology',
      'Silver ion-infused fabric',
      'Vibrational massager with 5 zones',
      'Split options with dual massagers',
      '10-year warranty',
      'Made in USA',
    ],
    benefits: [
      'Better blood circulation',
      'Pain reduction',
      'Improved sleep quality',
      'Muscle tension relief',
      'Enhanced immune function',
      'Hygienic and safe sleep environment',
    ],
    specifications: {
      Design: 'Modular (2 pillow top + 2 base sections)',
      Technologies: 'FIR POWER, MFP, ION BALLS',
      Massager: '5 different body zones',
      Warranty: '10 years full-time',
      Manufacturing: 'Made in USA',
    },
    images: ['/assets/images/products/product-placeholder.svg'],
    tags: ['mattress', 'modular', 'orthopedic', 'portable'],
    translations: {
      es: {
        fullDescription:
          'El colchón Nipponflex M1 representa la comodidad ortopédica auténtica llevada incluso a los espacios de más difícil acceso. Su diseño modular está formado por 2 secciones tipo pillow top y 2 secciones de base, lo que facilita enormemente el transporte, el montaje y el acceso a lugares donde los colchones tradicionales no llegan con facilidad.',
        features: [
          'Diseño modular (2 pillow top + 2 secciones de base)',
          'Tecnología FIR POWER',
          'Tecnología MFP (terapia magnética)',
          'Tecnología ION BALLS',
          'Tejido con iones de plata',
          'Masajeador vibratorio con 5 zonas',
          'Opciones split con doble masajeador',
          'Garantía de 10 años',
          'Fabricado en Estados Unidos',
        ],
        benefits: [
          'Mejor circulación sanguínea',
          'Disminución de dolores y molestias',
          'Sueño de mayor calidad',
          'Alivio de la tensión muscular',
          'Entorno de descanso más higiénico y seguro',
        ],
      },
    },
  },
  {
    id: '7',
    name: 'Sleep Cool Pillow',
    slug: 'sleep-cool-pillow',
    category: 'Pillows',
    shortDescription:
      'Adjustable height pillow with FIR Power tablets and magnets for optimal comfort.',
    fullDescription:
      'Sleep Cool Pillow by Nipponflex contains our exclusive and powerful Japanese technology FIR Power and special magnets. Double-sided (Vulcanplex Soft and viscoelastic foam) and fully ventilated with holes in all layers. Designed to be used for everyone, our exclusive Sleep Cool Pillow allows you to adjust the height so you can sleep comfortable.',
    features: [
      'Adjustable height (2in to 6in)',
      '36 FIR Power tablets',
      '36 magnets (800 gausses each)',
      'Double-sided design',
      'Vulcanplex Soft acupressure points',
      'Viscoelastic foam',
      'Fully ventilated with holes',
      'Polyurethane padding inner layer',
    ],
    benefits: [
      'Deep and restful sleep',
      'Increased muscular strength',
      'Better blood circulation',
      'Pain and fever relief',
      'Stress prevention',
      'Improved physical performance',
      'Enhanced cellular activities',
    ],
    warnings: [
      'Magnets are prohibited for persons with pacemakers, neuro-stimulators, defibrillators, insulin pumps, cochlear implants, or other battery-powered implants',
    ],
    specifications: {
      'Height Range': '2 inches to 6 inches (adjustable)',
      'FIR Tablets': '36 tablets',
      Magnets: '36 magnets at 800 gausses each',
      Warranty: '1 year',
      Design: 'Double-sided with ventilation',
    },
    images: ['/assets/images/products/SleepCoolPillow.png'],
    tags: ['pillow', 'adjustable', 'FIR POWER', 'magnets'],
    translations: {
      es: {
        fullDescription:
          'Sleep Cool Pillow de Nipponflex incorpora nuestra exclusiva y potente tecnología japonesa FIR Power junto con imanes especiales. Es una almohada de doble cara (Vulcanplex Soft y espuma viscoelástica) totalmente ventilada gracias a los orificios en todas las capas. Diseñada para adaptarse a diferentes personas, permite regular la altura para que puedas dormir con la comodidad que necesitas.',
        features: [
          'Altura regulable (de 5 a 15 cm aproximadamente)',
          '36 tabletas FIR Power',
          '36 imanes (800 gauss cada uno)',
          'Diseño de doble cara',
          'Puntos de acupresión Vulcanplex Soft',
          'Espuma viscoelástica',
          'Ventilación completa con perforaciones en todas las capas',
          'Capa interior acolchada de poliuretano',
        ],
        benefits: [
          'Sueño profundo y reparador',
          'Mayor fuerza y recuperación muscular',
          'Mejor circulación sanguínea',
          'Alivio de dolores y fiebre',
          'Ayuda a la prevención del estrés',
          'Mejor rendimiento físico',
          'Apoyo a la actividad celular saludable',
        ],
        warnings: [ES_COMMON_WARNINGS.magnetsImplants],
      },
    },
  },
  {
    id: '8',
    name: 'FIR ION Kids Bracelet',
    slug: 'fir-ion-kids-bracelet',
    category: 'Kids Wellness',
    shortDescription:
      'Superhero-inspired bracelet designed exclusively for children with FIR ION technology.',
    fullDescription:
      'Introducing the Bracelet FIR ION Kids designed exclusively for children with their favorite superheroes. Available in both Boy and Girl versions, this bracelet brings the power of FIR ION technology to your little ones. Empower your child with the benefits of FIR ION technology.',
    features: [
      'Superhero-inspired designs',
      'Boy and Girl versions available',
      '2 FIR Power tablets',
      '2 Ion Balls',
      '2 Magnet tablets',
      'Child-safe materials',
      'Promotes focus and balance',
    ],
    benefits: [
      'Better focus and concentration',
      'Improved balance',
      'Enhanced overall well-being',
      'Increased energy and confidence',
      'Better sleep quality',
      'Stress reduction',
    ],
    warnings: [
      'Not recommended for children under 3 years old',
      'Magnets are prohibited for persons with medical implants',
    ],
    specifications: {
      'Age Range': '3+ years',
      Components: '2 FIR Power, 2 Ion Balls, 2 Magnets',
      Versions: 'Boy and Girl designs',
      Safety: 'Child-safe materials',
    },
    images: ['/assets/images/products/KidsBracelet.png'],
    tags: ['kids', 'bracelet', 'superhero', 'FIR ION'],
    translations: {
      es: {
        fullDescription:
          'La pulsera FIR ION Kids ha sido diseñada exclusivamente para niños, inspirada en sus superhéroes favoritos. Disponible en versiones para niño y niña, acerca el poder de la tecnología FIR ION a los más pequeños de forma divertida y cómoda.',
        features: [
          'Diseños inspirados en superhéroes',
          'Versiones para niño y para niña',
          '2 tabletas FIR Power',
          '2 Ion Balls',
          '2 tabletas magnéticas',
          'Materiales seguros para niños',
          'Favorece la concentración y el equilibrio',
        ],
        benefits: [
          'Mejor enfoque y concentración',
          'Mejor equilibrio y coordinación',
          'Apoyo al bienestar general',
          'Aumento de la energía y la confianza',
          'Mejor calidad de sueño',
          'Ayuda a reducir el estrés y la inquietud',
        ],
        warnings: [
          'No se recomienda para niños menores de 3 años',
          ES_COMMON_WARNINGS.magnetsImplants,
        ],
      },
    },
  },
  {
    id: '9',
    name: 'BAND FIR ION',
    slug: 'band-fir-ion',
    category: 'Wellness Accessories',
    shortDescription:
      'Versatile band designed to be placed anywhere on the body with FIR Power, magnets, and Ion Balls.',
    fullDescription:
      'The FIR Ion Band is designed to be placed anywhere on the body. The case is designed to be convenient, so you can now bring FIR Power, Magnetos and Ion Balls technologies into your home. Includes 05 FIR Power, 05 Special Magnets and 03 Ion Balls that were designed for better application in the adhesive.',
    features: [
      '5 FIR Power tablets',
      '5 special magnets',
      '3 Ion Balls',
      '30 non-allergenic sticky patches',
      'Resistant packaging',
      'Protective seal',
      'Two removal keys included',
      'Portable design',
    ],
    benefits: [
      'Targeted therapy application',
      'Convenient home use',
      'Versatile body placement',
      'Non-allergenic adhesive',
      'Easy application and removal',
    ],
    warnings: [
      'Magnets are prohibited for persons with medical implants that use batteries',
    ],
    specifications: {
      'FIR Power': '5 tablets',
      Magnets: '5 special magnets',
      'Ion Balls': '3 balls',
      Patches: '30 non-allergenic sticky patches',
      Tools: '2 removal keys included',
    },
    images: ['/assets/images/products/bandFirIon.png'],
    tags: ['band', 'FIR ION', 'portable', 'therapy'],
    translations: {
      es: {
        fullDescription:
          'La banda FIR ION está diseñada para colocarse en prácticamente cualquier parte del cuerpo. Su estuche fue pensado para ser práctico, de modo que puedas llevar las tecnologías FIR Power, Magnetos e Ion Balls directamente a tu hogar y aplicarlas de forma localizada. Incluye 5 tabletas FIR Power, 5 imanes especiales y 3 Ion Balls, diseñados para una mejor aplicación con los adhesivos.',
        features: [
          '5 tabletas FIR Power',
          '5 imanes especiales',
          '3 Ion Balls',
          '30 parches adhesivos hipoalergénicos',
          'Estuche resistente',
          'Sello protector de seguridad',
          'Dos llaves para retirar los elementos',
          'Diseño portátil y compacto',
        ],
        benefits: [
          'Aplicación terapéutica localizada',
          'Uso cómodo en el hogar',
          'Posibilidad de uso en diferentes zonas del cuerpo',
          'Adhesivo hipoalergénico',
          'Colocación y retirada sencillas',
        ],
        warnings: [ES_COMMON_WARNINGS.magnetsImplants],
      },
    },
  },
  {
    id: '10',
    name: 'WristBand',
    slug: 'wristband',
    category: 'Wellness Accessories',
    shortDescription:
      'Wellness wristband with advanced technologies for daily energy and balance.',
    fullDescription:
      'Experience wellness on your wrist with our advanced WristBand featuring cutting-edge technologies for improved energy, balance, and overall well-being throughout your day.',
    features: [
      'Advanced wellness technologies',
      'Comfortable daily wear',
      'Durable construction',
      'Stylish design',
      'Easy to use',
    ],
    benefits: [
      'Improved energy levels',
      'Better balance',
      'Enhanced well-being',
      'Convenient daily use',
    ],
    warnings: [
      'Magnets are prohibited for persons with pacemakers, neuro-stimulators, defibrillators, insulin pumps, cochlear implants, or other battery-powered implants',
    ],
    specifications: {
      Type: 'Wellness wristband',
      Usage: 'Daily wear',
      Design: 'Comfortable and stylish',
    },
    images: ['/assets/images/products/wristBand.png'],
    tags: ['wristband', 'wellness', 'daily wear'],
    translations: {
      es: {
        fullDescription:
          'Experimenta el bienestar en tu muñeca con nuestra WristBand, que integra tecnologías avanzadas pensadas para favorecer la energía, el equilibrio y el bienestar general a lo largo del día.',
        features: [
          'Tecnologías de bienestar avanzadas',
          'Diseñada para el uso diario',
          'Construcción resistente',
          'Diseño estilizado',
          'Fácil de usar',
        ],
        benefits: [
          'Mejora de los niveles de energía',
          'Mayor sensación de equilibrio corporal',
          'Apoyo al bienestar general',
          'Uso diario práctico y cómodo',
        ],
        warnings: [ES_COMMON_WARNINGS.magnetsImplants],
      },
    },
  },
  {
    id: '11',
    name: 'WristBand Power',
    slug: 'wristband-power',
    category: 'Wellness Accessories',
    shortDescription:
      'Enhanced power wristband with advanced wellness technologies for maximum benefits.',
    fullDescription:
      'Take your wellness to the next level with our WristBand Power, featuring enhanced technologies and increased power for maximum wellness benefits throughout your active lifestyle.',
    features: [
      'Enhanced power technologies',
      'Maximum wellness benefits',
      'Comfortable for active lifestyle',
      'Durable construction',
      'Advanced design',
    ],
    benefits: [
      'Maximum energy enhancement',
      'Superior balance improvement',
      'Enhanced physical performance',
      'Optimal wellness support',
    ],
    warnings: [
      'Magnets are prohibited for persons with pacemakers, neuro-stimulators, defibrillators, insulin pumps, cochlear implants, or other battery-powered implants',
    ],
    specifications: {
      Type: 'Enhanced power wristband',
      'Power Level': 'Maximum',
      Usage: 'Active lifestyle',
    },
    images: ['/assets/images/products/WristBandPower.png'],
    tags: ['wristband', 'power', 'enhanced', 'performance'],
    translations: {
      es: {
        fullDescription:
          'Lleva tu bienestar al siguiente nivel con nuestra WristBand Power, que incorpora tecnologías reforzadas y mayor intensidad para ofrecer el máximo beneficio de bienestar durante tu estilo de vida activo.',
        features: [
          'Tecnologías de potencia mejorada',
          'Beneficios de bienestar al máximo nivel',
          'Diseñada para estilos de vida activos',
          'Construcción duradera',
          'Diseño avanzado',
        ],
        benefits: [
          'Mayor potenciación de la energía',
          'Mejora superior del equilibrio',
          'Rendimiento físico optimizado',
          'Apoyo integral al bienestar diario',
        ],
        warnings: [ES_COMMON_WARNINGS.magnetsImplants],
      },
    },
  },
  {
    id: '12',
    name: "Women's Training FIR Bra Top",
    slug: 'womens-training-fir-bra-top',
    category: 'Athletic Wear',
    shortDescription:
      'High-performance training bra top with FIR technology for enhanced workout experience.',
    fullDescription:
      "Experience the ultimate in athletic performance with our Women's Training FIR Bra Top, incorporating advanced FIR technology to enhance your workout experience while providing superior support and comfort.",
    features: [
      'FIR technology integration',
      'High-performance athletic design',
      'Superior support',
      'Moisture-wicking fabric',
      'Comfortable fit',
      'Stylish design',
    ],
    benefits: [
      'Enhanced workout performance',
      'Improved circulation during exercise',
      'Superior comfort and support',
      'Better recovery',
      'Stylish athletic appearance',
    ],
    warnings: [
      'Magnets are prohibited for persons with pacemakers, neuro-stimulators, defibrillators, insulin pumps, cochlear implants, or other battery-powered implants',
    ],
    specifications: {
      Type: 'Athletic training bra top',
      Technology: 'FIR integration',
      Material: 'High-performance fabric',
      'Support Level': 'High',
    },
    images: ['/assets/images/products/BraTopFIR.png'],
    tags: ['bra top', 'athletic wear', 'FIR technology', 'women'],
    translations: {
      es: {
        fullDescription:
          "Vive el máximo rendimiento deportivo con nuestro Women's Training FIR Bra Top, que incorpora tecnología FIR avanzada para potenciar tu experiencia de entrenamiento mientras ofrece un soporte y una comodidad superiores.",
        features: [
          'Integración de tecnología FIR',
          'Diseño deportivo de alto rendimiento',
          'Soporte superior',
          'Tejido que absorbe la humedad',
          'Ajuste cómodo',
          'Diseño moderno y estilizado',
        ],
        benefits: [
          'Rendimiento mejorado durante el entrenamiento',
          'Mejor circulación durante la actividad física',
          'Confort y soporte superiores',
          'Mejor recuperación después del ejercicio',
          'Aspecto deportivo y estilizado',
        ],
        warnings: [ES_COMMON_WARNINGS.magnetsImplants],
      },
    },
  },
  {
    id: '13',
    name: 'Abdominal Strap Ion',
    slug: 'abdominal-strap-ion',
    category: 'Wellness Accessories',
    shortDescription:
      'Revolutionary abdominal strap with FIR POWER, ION BALLS, and magnetism for back pain relief and posture improvement.',
    fullDescription:
      "Introducing the revolutionary Abdominal Strap crafted with advanced FIR POWER, ION BALL, and Magnetism technologies. Say goodbye to back pain and poor posture as this strap works wonders in alleviating discomfort. The integrated ION BALLS emit negative ions, revitalizing your body's energy levels, reducing fatigue, and boosting endurance.",
    features: [
      '3 Ion Balls',
      '4 FIR Power tablets',
      '14 Neodymium Magnets',
      '7 steel flexible rods',
      '100% neoprene latex free',
      'Adjustable Velcro fastener',
      'Comfortable design',
      'May improve posture',
      'May compress lumbar region',
    ],
    benefits: [
      'Back pain relief',
      'Posture improvement',
      'Enhanced blood circulation',
      'Reduced fatigue',
      'Boosted endurance',
      'Body measurements support',
    ],
    warnings: [
      'Magnets are prohibited for persons with pacemakers, neuro-stimulators, defibrillators, insulin pumps, cochlear implants, or other battery-powered implants',
    ],
    specifications: {
      'Ion Balls': '3 balls',
      'FIR Power': '4 tablets',
      Magnets: '14 Neodymium magnets',
      Rods: '7 steel flexible rods',
      Material: '100% neoprene latex free',
    },
    images: ['/assets/images/products/abdonimalStrapIon.png'],
    tags: ['abdominal strap', 'back support', 'FIR POWER', 'ion therapy'],
    translations: {
      es: {
        fullDescription:
          'La faja abdominal Ion está elaborada con las tecnologías avanzadas FIR POWER, Ion Balls y magnetismo. Ayuda a aliviar el dolor de espalda y a mejorar la postura, mientras las Ion Balls integradas emiten iones negativos que revitalizan los niveles de energía, reducen la fatiga y apoyan la resistencia física.',
        features: [
          '3 Ion Balls',
          '4 tabletas FIR Power',
          '14 imanes de neodimio',
          '7 varillas de acero flexibles',
          '100 % neopreno libre de látex',
          'Cierre ajustable de velcro',
          'Diseño cómodo de uso diario',
          'Puede ayudar a mejorar la postura',
          'Puede comprimir la región lumbar',
        ],
        benefits: [
          'Alivio del dolor de espalda',
          'Mejora de la postura',
          'Estimulación de la circulación sanguínea',
          'Reducción de la fatiga',
          'Apoyo a la resistencia física',
          'Soporte adicional para la zona abdominal',
        ],
        warnings: [ES_COMMON_WARNINGS.magnetsImplants],
      },
    },
  },
  {
    id: '14',
    name: 'Bra Cup',
    slug: 'bra-cup',
    category: "Women's Wellness",
    shortDescription:
      'Revolutionary BRA CUP with FIR POWER technology for chest comfort and improved breast health.',
    fullDescription:
      'Introducing BRA CUP - Say goodbye to chest discomfort and pain! Experience the revolutionary BRA CUP – the perfect solution for women looking to prevent chest pains and discomfort. With FIR POWER technology, it improves blood circulation and reduces muscle soreness.',
    features: [
      'FIR POWER technology',
      '3 FIR POWER tablets per side',
      'Cotton fabric encasing',
      'Foam construction',
      'Specially shaped design',
      'Available in various sizes',
      'Practical and comfortable',
    ],
    benefits: [
      'Improved blood circulation',
      'Reduced muscle soreness',
      'All-day comfort',
      'Improved breast health',
      'Prevention of chest discomfort',
    ],
    specifications: {
      'FIR Tablets': '6 tablets total (3 per side)',
      Material: 'Cotton fabric with foam',
      Color: 'Black',
      Design: 'Specially shaped',
    },
    images: ['/assets/images/products/braCup.png'],
    tags: ['bra cup', 'FIR POWER', "women's health", 'comfort'],
    translations: {
      es: {
        fullDescription:
          'Te presentamos BRA CUP: la copa de sujetador revolucionaria pensada para ayudar a prevenir molestias y dolores en la zona del pecho. Gracias a la tecnología FIR POWER, contribuye a mejorar la circulación sanguínea y a reducir la sensación de fatiga muscular, ofreciendo confort durante todo el día.',
        features: [
          'Tecnología FIR POWER integrada',
          '3 tabletas FIR POWER por cada lado',
          'Tejido de algodón que envuelve la copa',
          'Construcción en espuma',
          'Diseño anatómico especialmente moldeado',
          'Disponible en varias tallas',
          'Práctica y cómoda para el uso diario',
        ],
        benefits: [
          'Mejor circulación sanguínea en la zona del pecho',
          'Reducción de la sobrecarga muscular',
          'Confort prolongado durante el día',
          'Apoyo al bienestar mamario',
          'Ayuda a prevenir molestias y puntos de presión',
        ],
      },
    },
  },
  {
    id: '15',
    name: 'Shaper Shorts',
    slug: 'shaper-shorts',
    category: "Women's Wellness",
    shortDescription:
      'Transform your body with revolutionary shaper shorts infused with FIR POWER technology for muscle recovery and body shaping.',
    fullDescription:
      'Transform your body with our revolutionary Shaper Shorts! Designed to help you recover and tone your pelvic muscles, while also concealing unwanted belly fat. Our Shaper Shorts are infused with cutting-edge FIR POWER technology, providing optimal support and comfort throughout the day.',
    features: [
      '4 FIR POWER tablets',
      '7 Neodymium Magnets',
      'Body shaping design',
      'Pelvic muscle support',
      'Comfortable all-day wear',
      'Enhanced muscle recovery',
    ],
    benefits: [
      'Pelvic muscle recovery and toning',
      'Body shape enhancement',
      'Belly fat concealment',
      'Improved muscle recovery',
      'Confident appearance',
    ],
    warnings: [
      'Magnets are prohibited for persons with pacemakers, neuro-stimulators, defibrillators, insulin pumps, cochlear implants, or other battery-powered implants',
    ],
    specifications: {
      'FIR Power': '4 tablets',
      Magnets: '7 Neodymium magnets',
      Purpose: 'Body shaping and muscle recovery',
    },
    images: ['/assets/images/products/womenShorts.png'],
    tags: ['shaper', 'body shaping', 'FIR POWER', "women's wellness"],
    translations: {
      es: {
        fullDescription:
          'Transforma tu silueta con nuestros Shaper Shorts. Están diseñados para ayudar en la recuperación y tonificación de los músculos pélvicos, al tiempo que disimulan la grasa abdominal no deseada. Integran la tecnología FIR POWER para proporcionar soporte y comodidad óptimos durante todo el día.',
        features: [
          '4 tabletas FIR POWER',
          '7 imanes de neodimio',
          'Diseño moldeador del cuerpo',
          'Soporte específico para la musculatura pélvica',
          'Comodidad para uso prolongado',
          'Apoyo a la recuperación muscular',
        ],
        benefits: [
          'Recuperación y tonificación de la musculatura pélvica',
          'Mejora del contorno corporal',
          'Ayuda a disimular la grasa abdominal',
          'Apoyo a la recuperación muscular',
          'Mayor seguridad y confianza en el día a día',
        ],
        warnings: [ES_COMMON_WARNINGS.magnetsImplants],
      },
    },
  },
  {
    id: '16',
    name: 'Slipper Slide',
    slug: 'slipper-slide',
    category: 'Footwear',
    shortDescription:
      'Comfortable slipper slides with FIR Power tablets and special magnets for therapeutic benefits.',
    fullDescription:
      'Slipper Slide - e-Energy/Nipponflex featuring 6 FIR Power Tablets and 14 Special Magnets for enhanced wellness and comfort with every step.',
    features: [
      '6 FIR Power tablets',
      '14 special magnets',
      'Comfortable slide design',
      'Therapeutic benefits',
      'Daily wear comfort',
    ],
    benefits: [
      'Deep and restful sleep support',
      'Increased muscular strength',
      'Better blood circulation',
      'Pain and fever relief',
      'Stress prevention',
      'Enhanced physical performance',
    ],
    warnings: [
      'Magnets are prohibited for persons with pacemakers, neuro-stimulators, defibrillators, insulin pumps, cochlear implants, or other battery-powered implants',
    ],
    specifications: {
      'FIR Power': '6 tablets',
      Magnets: '14 special magnets',
      Type: 'Slide slippers',
    },
    images: ['/assets/images/products/slipperSlide.png'],
    tags: ['slippers', 'footwear', 'FIR POWER', 'magnets'],
    translations: {
      es: {
        fullDescription:
          'Las Slipper Slide de e‑Energy/Nipponflex incorporan 6 tabletas FIR Power y 14 imanes especiales para ofrecer confort y bienestar en cada paso.',
        features: [
          '6 tabletas FIR Power',
          '14 imanes especiales',
          'Diseño tipo slide cómodo',
          'Beneficios terapéuticos al caminar',
          'Comodidad para el uso diario',
        ],
        benefits: [
          'Apoyo al sueño profundo y reparador',
          'Mayor fuerza muscular',
          'Mejor circulación sanguínea',
          'Alivio de dolores y molestias',
          'Prevención del estrés',
          'Mejor rendimiento físico en el día a día',
        ],
        warnings: [ES_COMMON_WARNINGS.magnetsImplants],
      },
    },
  },
  {
    id: '17',
    name: "Women's Flip Flop",
    slug: 'womens-flip-flop',
    category: 'Footwear',
    shortDescription:
      'Stylish light pink flip flops with FIR Power tablets and magnets for comfortable wellness on-the-go.',
    fullDescription:
      "Women's Flip Flops Light Pink – E-Energy/Nipponflex featuring 6 FIR Power Tablets and 14 Special Magnets. Comfortable and durable design for daily wellness support.",
    features: [
      '6 FIR Power tablets',
      '14 special magnets',
      'Light pink color',
      'Comfortable design',
      'Durable construction',
      'Stylish appearance',
    ],
    benefits: [
      'Wellness support while walking',
      'Comfortable daily wear',
      'Stylish footwear option',
      'Therapeutic benefits',
    ],
    warnings: [
      'Magnets are prohibited for persons with pacemakers, neuro-stimulators, defibrillators, insulin pumps, cochlear implants, or other battery-powered implants',
    ],
    specifications: {
      'FIR Power': '6 tablets',
      Magnets: '14 special magnets',
      Color: 'Light pink',
      Gender: "Women's",
    },
    images: ['/assets/images/products/womenFlipFlops.png'],
    tags: ['flip flops', "women's footwear", 'FIR POWER', 'pink'],
    translations: {
      es: {
        fullDescription:
          'Las chanclas femeninas Light Pink de E‑Energy/Nipponflex integran 6 tabletas FIR Power y 14 imanes especiales. Combinan confort, durabilidad y bienestar para acompañarte en tu rutina diaria.',
        features: [
          '6 tabletas FIR Power',
          '14 imanes especiales',
          'Color rosa claro',
          'Diseño cómodo',
          'Construcción duradera',
          'Estilo actual y femenino',
        ],
        benefits: [
          'Soporte de bienestar mientras caminas',
          'Comodidad para el uso diario',
          'Opción de calzado con estilo',
          'Beneficios terapéuticos integrados',
        ],
        warnings: [ES_COMMON_WARNINGS.magnetsImplants],
      },
    },
  },
  {
    id: '18',
    name: 'Alkaline Filter Refill',
    slug: 'alkaline-filter-refill',
    category: 'Water Filtration',
    shortDescription:
      'Replacement filter for Alcaline Max systems with 50-gallon capacity or 9-month lifespan.',
    fullDescription:
      'High-quality replacement filter for your Alcaline Max water filtration systems. Designed to maintain optimal water quality and pH balance with a generous lifespan of 50 gallons or 9 months, whichever comes first.',
    features: [
      '50-gallon capacity',
      '9-month lifespan',
      'Compatible with Alcaline Max systems',
      'High-quality filtration',
      'Easy replacement',
      'Maintains pH balance',
    ],
    benefits: [
      'Continued pure water access',
      'Cost-effective maintenance',
      'Optimal filtration performance',
      'Easy maintenance routine',
    ],
    specifications: {
      Capacity: '50 gallons',
      Lifespan: '9 months (whichever reached first)',
      Compatibility: 'Alcaline Max systems',
    },
    images: ['/assets/images/products/akalineFilterRefil.png'],
    tags: ['filter refill', 'water filtration', 'replacement', 'maintenance'],
    translations: {
      es: {
        fullDescription:
          'Cartucho de recambio de alta calidad para los sistemas de filtración de agua Alcaline Max. Diseñado para mantener la calidad óptima del agua y el equilibrio de pH, con una generosa vida útil de hasta 50 galones o 9 meses, lo que ocurra primero.',
        features: [
          'Capacidad de 50 galones',
          'Duración de hasta 9 meses',
          'Compatible con sistemas Alcaline Max',
          'Filtración de alta calidad',
          'Recambio sencillo',
          'Ayuda a mantener el equilibrio de pH del agua',
        ],
        benefits: [
          'Acceso continuo a agua purificada',
          'Mantenimiento rentable del sistema',
          'Rendimiento de filtración optimizado',
          'Rutina de mantenimiento fácil y rápida',
        ],
      },
    },
  },
  {
    id: '11',
    name: 'Tanga Panty',
    slug: 'tanga-panty',
    category: 'Wellness Apparel',
    shortDescription:
      'Revolutionary panty with FIR POWER technology for pelvic muscle recovery and comfort.',
    fullDescription:
      'Discover the transformative power of our Tanga Panty - the ultimate solution for pelvic muscle recovery. This innovative panty is designed to provide support, comfort, and Enhanced recovery, all while incorporating FIR POWER technology. Our Tanga Panty is infused with FIR POWER technology, which harnesses the healing properties of far-infrared rays. This advanced technology promotes blood circulation, improves oxygen flow, and accelerates muscle recovery in the pelvic area.',
    features: [
      'FIR POWER technology infusion',
      'Contains 4 FIR Power tablets',
      '7 special magnets 400 gauss',
      'Microfiber fabric',
      'Targeted pelvic muscle support',
      'Promotes blood circulation',
      'Accelerates muscle recovery',
      'BUY ONE GET ONE offer',
    ],
    benefits: [
      'Enhanced pelvic muscle recovery',
      'Improved blood circulation',
      'Better oxygen flow',
      'Targeted relief and comfort',
      'Increased confidence and vitality',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      Material: 'Microfiber fabric',
      'FIR Tablets': '4 FIR Power tablets',
      Magnets: '7 special magnets 400 gauss',
      Offer: 'Buy One Get One',
    },
    images: ['/assets/images/products/tangaPanty.png'],
    tags: ['underwear', 'FIR POWER', 'magnets', 'pelvic health', 'women'],
    translations: {
      es: {
        fullDescription:
          'La Tanga Panty es una solución innovadora pensada para apoyar la recuperación de la musculatura pélvica. Incorpora la tecnología FIR POWER, que aprovecha los beneficios de los rayos infrarrojos lejanos, ayudando a mejorar la circulación, el flujo de oxígeno y la recuperación muscular en la zona pélvica.',
        features: [
          'Infusión de tecnología FIR POWER',
          'Contiene 4 tabletas FIR Power',
          '7 imanes especiales de 400 gauss',
          'Tejido de microfibra',
          'Soporte dirigido a la musculatura pélvica',
          'Favorece la circulación sanguínea',
          'Ayuda a acelerar la recuperación muscular',
          'Promoción tipo “compra uno y llévate otro”',
        ],
        benefits: [
          'Recuperación pélvica potenciada',
          'Mejora del flujo sanguíneo',
          'Mayor oxigenación local',
          'Alivio focalizado y sensación de confort',
          'Incremento de la confianza y vitalidad',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
          ES_COMMON_WARNINGS.taxesAndFees,
        ],
      },
    },
  },
  {
    id: '12',
    name: 'Underwear Boxer',
    slug: 'underwear-boxer',
    category: 'Wellness Apparel',
    shortDescription:
      'E-energy underwear with advanced FIR POWER technology and powerful magnetism for men.',
    fullDescription:
      'Experience the incredible power of E-energy underwear! With advanced FIR POWER technology and powerful magnetism, it will revolutionize your life. Feel energized, rejuvenated, and ready to conquer the world! The FIR POWER technology regulates your body temperature, improving blood circulation and providing a unique sense of comfort. The powerful magnetism stimulates your physical and mental performance, enabling you to easily achieve your goals.',
    features: [
      '2 units included',
      'Embroidered Elastic',
      'Microfiber Fabric',
      '3 FIR POWER tablets',
      '6 MAGNETS',
      'Lightweight material',
      'Body temperature regulation',
      'Seamless fit',
    ],
    benefits: [
      'Improved blood circulation',
      'Enhanced physical performance',
      'Mental performance stimulation',
      'Maximum comfort all day',
      'Body temperature regulation',
    ],
    warnings: [
      'FINAL SALE NO RETURN',
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-stimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      Quantity: '2 units included',
      Material: 'Microfiber Fabric',
      'FIR POWER': '3 tablets',
      Magnets: '6 magnets',
      Elastic: 'Embroidered',
    },
    images: ['/assets/images/products/underwearBoxer.png'],
    tags: ['underwear', 'FIR POWER', 'magnets', 'men', 'performance'],
    translations: {
      es: {
        fullDescription:
          'Experimenta el poder de la ropa interior E‑energy. Con la tecnología avanzada FIR POWER y un sistema de magnetismo integrado, este boxer está diseñado para aportar energía, sensación de renovación y mayor disposición para afrontar el día. La tecnología FIR POWER ayuda a regular la temperatura corporal y favorecer la circulación, mientras que el campo magnético apoya el rendimiento físico y mental.',
        features: [
          'Incluye 2 unidades por paquete',
          'Elástico bordado de alta calidad',
          'Tejido de microfibra',
          '3 tabletas FIR POWER',
          '6 imanes',
          'Material ligero',
          'Apoyo a la regulación de la temperatura corporal',
          'Ajuste cómodo y sin costuras agresivas',
        ],
        benefits: [
          'Mejor circulación sanguínea',
          'Rendimiento físico reforzado',
          'Apoyo al rendimiento mental',
          'Máxima comodidad durante todo el día',
          'Apoyo a la regulación térmica del cuerpo',
        ],
        warnings: [
          ES_COMMON_WARNINGS.noReturnFinalSale,
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '13',
    name: 'Legging',
    slug: 'legging',
    category: 'Wellness Apparel',
    shortDescription:
      'FIR POWER-infused leggings that optimize performance and support active lifestyle.',
    fullDescription:
      'Experience the ultimate fusion of Comfort and technology with our FIR POWER-infused Leggings. Designed to optimize your performance and support your active lifestyle, these leggings are a game-changer. What makes our leggings truly exceptional is the incorporation of FIR POWER technology, which is infused into the fabric and complemented by the addition of FIR POWER tablets. FIR POWER harnesses the power of far-infrared rays to stimulate blood circulation, improve oxygen flow, and reduce muscle fatigue.',
    features: [
      'Contains 7 FIR Bioceramic',
      '14 Neodymium Magnets',
      '7 steel flexible rods',
      'Premium-quality fabric',
      'Breathable and moisture-wicking',
      'Stretchy material',
      'Stylish design',
      'Flattering fit',
    ],
    benefits: [
      'Enhanced performance',
      'Better blood circulation',
      'Reduced muscle fatigue',
      'Improved oxygen flow',
      'Deep and restful sleep',
      'Increased muscular strength',
      'Stress prevention',
      'Pain relief',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-stimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Bioceramic': '7 units',
      'Neodymium Magnets': '14 units',
      'Steel Rods': '7 flexible rods',
      Material: 'Premium breathable fabric',
    },
    images: ['/assets/images/products/leggin.png'],
    tags: ['leggings', 'FIR POWER', 'magnets', 'activewear', 'performance'],
    translations: {
      es: {
        fullDescription:
          'Nuestras leggings con FIR POWER ofrecen una fusión única de comodidad y tecnología. Diseñadas para optimizar tu rendimiento y acompañar tu estilo de vida activo, incorporan FIR POWER tanto en el tejido como en tabletas integradas, aprovechando los rayos infrarrojos lejanos para estimular la circulación, mejorar el flujo de oxígeno y reducir la fatiga muscular.',
        features: [
          'Contiene 7 unidades de FIR Bioceramic',
          '14 imanes de neodimio',
          '7 varillas de acero flexibles',
          'Tejido de alta calidad',
          'Material transpirable y que absorbe la humedad',
          'Tejido elástico y adaptable',
          'Diseño estilizado',
          'Ajuste favorecedor de la silueta',
        ],
        benefits: [
          'Rendimiento físico mejorado',
          'Mejor circulación sanguínea',
          'Reducción de la fatiga muscular',
          'Mayor flujo de oxígeno a los tejidos',
          'Sueño más profundo y reparador',
          'Aumento de la fuerza muscular',
          'Apoyo en la prevención del estrés',
          'Alivio del dolor y las molestias',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '14',
    name: 'Super Sleep Mask',
    slug: 'super-sleep-mask',
    category: 'Sleep & Recovery',
    shortDescription:
      'Energy Super Sleep Mask with FIR Power tablets and Neodymium Magnet for better sleep.',
    fullDescription:
      'Energy Super Sleep Mask - e-Energy/Nipponflex. Unique and Adjustable Size. Contains 04 Ion Balls, 02 FIR Power tablets and 01 Neodymium Magnet for enhanced sleep quality and recovery.',
    features: [
      'Unique and adjustable size',
      '04 Ion Balls',
      '02 FIR Power tablets',
      '01 Neodymium Magnet',
      'Comfortable design',
      'Sleep enhancement technology',
    ],
    benefits: [
      'Deep and restful sleep',
      'Increased muscular strength',
      'Enhanced physical activities',
      'Stress prevention',
      'Improved blood circulation',
      'Pain relief',
      'Better cellular activities',
      'Enhanced blood oxygenation',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'Ion Balls': '4 units',
      'FIR Power Tablets': '2 units',
      'Neodymium Magnets': '1 unit',
      Size: 'Adjustable',
    },
    images: ['/assets/images/products/sleepMask.png'],
    tags: ['sleep mask', 'FIR POWER', 'magnets', 'ion balls', 'sleep'],
    translations: {
      es: {
        fullDescription:
          'La Energy Super Sleep Mask de e‑Energy/Nipponflex es un antifaz de tamaño único y ajustable que integra 4 Ion Balls, 2 tabletas FIR Power y 1 imán de neodimio. Está pensada para mejorar la calidad del sueño y apoyar los procesos de recuperación durante el descanso.',
        features: [
          'Tamaño único y ajustable',
          '4 Ion Balls',
          '2 tabletas FIR Power',
          '1 imán de neodimio',
          'Diseño cómodo para dormir',
          'Tecnología específica para mejorar el sueño',
        ],
        benefits: [
          'Sueño profundo y reparador',
          'Mayor fuerza muscular',
          'Mayor rendimiento físico',
          'Apoyo en la gestión del estrés',
          'Mejor circulación sanguínea',
          'Alivio de dolores y molestias',
          'Apoyo a la actividad celular saludable',
          'Mejor oxigenación de la sangre',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '15',
    name: 'Anklet',
    slug: 'anklet',
    category: 'Wellness Accessories',
    shortDescription:
      'Wellness anklet designed for enhanced circulation and energy.',
    fullDescription:
      'Wellness anklet designed to provide enhanced circulation and energy through advanced wellness technology.',
    features: [
      'Comfortable fit',
      'Wellness technology',
      'Enhanced circulation',
      'Energy enhancement',
    ],
    benefits: [
      'Improved circulation',
      'Enhanced energy levels',
      'Comfortable wear',
      'Wellness support',
    ],
    specifications: {
      Type: 'Wellness Anklet',
    },
    images: ['/assets/images/products/anklet.png'],
    tags: ['anklet', 'wellness', 'circulation', 'energy'],
    translations: {
      es: {
        fullDescription:
          'Tobillera de bienestar diseñada para favorecer la circulación y la energía en la zona del tobillo mediante tecnologías de apoyo al bienestar.',
        features: [
          'Ajuste cómodo',
          'Tecnología de bienestar integrada',
          'Favorece la circulación',
          'Apoya los niveles de energía',
        ],
        benefits: [
          'Mejor circulación en la zona del tobillo y pie',
          'Mayor sensación de energía',
          'Uso confortable durante el día',
          'Apoyo general al bienestar',
        ],
      },
    },
  },
  {
    id: '16',
    name: 'Knee Brace One Size Adjustable',
    slug: 'knee-brace-adjustable',
    category: 'Support & Braces',
    shortDescription:
      'Energy Knee BRACE with FIR Power tablets and Neodymium Magnet for knee support.',
    fullDescription:
      'Energy Knee BRACE - e-Energy by Nipponflex. Contains: 04 FIR Power tablets and 01 Neodymium Magnet. Made with Neoprene, adjustable, flexible and anatomical. Thermal compression for enhanced knee support and recovery.',
    features: [
      '04 FIR Power tablets',
      '01 Neodymium Magnet',
      'Made with Neoprene',
      'Adjustable fit',
      'Flexible and anatomical design',
      'Thermal compression',
      'One size fits all',
    ],
    benefits: [
      'Enhanced knee support',
      'Improved recovery',
      'Thermal compression benefits',
      'Flexible movement',
      'Anatomical fit',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Power Tablets': '4 units',
      'Neodymium Magnets': '1 unit',
      Material: 'Neoprene',
      Size: 'One size adjustable',
      Type: 'Thermal compression',
    },
    images: ['/assets/images/products/kneeBrace.png'],
    tags: ['knee brace', 'FIR POWER', 'magnets', 'neoprene', 'support'],
    translations: {
      es: {
        fullDescription:
          'La Energy Knee BRACE de e‑Energy by Nipponflex contiene 4 tabletas FIR Power y 1 imán de neodimio. Fabricada en neopreno, es ajustable, flexible y anatómica, proporcionando compresión térmica para apoyar la rodilla y los procesos de recuperación.',
        features: [
          '4 tabletas FIR Power',
          '1 imán de neodimio',
          'Fabricada en neopreno',
          'Ajuste regulable',
          'Diseño flexible y anatómico',
          'Compresión térmica',
          'Talla única ajustable',
        ],
        benefits: [
          'Mayor soporte para la articulación de la rodilla',
          'Apoyo en la recuperación',
          'Beneficios de la compresión térmica',
          'Permite un movimiento más cómodo',
          'Ajuste anatómico adaptado a la pierna',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
          ES_COMMON_WARNINGS.taxesAndFees,
        ],
      },
    },
  },
  {
    id: '17',
    name: 'Knee Pad',
    slug: 'knee-pad',
    category: 'Support & Braces',
    shortDescription:
      'Energy Knee Pad with FIR POWER and magnetism for enhanced performance and recovery.',
    fullDescription:
      'Elevate your performance with the Energy Knee Pad! Designed to enhance both recovery and vitality, this revolutionary product harnesses the power OF FIR POWER and magnetism, strategically placed at acupuncture points on your knee. Experience the benefits of FIR POWER and magnetism working together to stimulate circulation, relieve pain, and promote overall well-being, Designed with the same principles as acupuncture, the Energy Knee Pad targets key energy meridians, allowing for heightened performance and accelerated recovery.',
    features: [
      '04 FIR Power tablets',
      '01 Neodymium Magnet',
      'Acupuncture point targeting',
      'Energy meridian alignment',
      'Revolutionary design',
      'Performance enhancement',
      'Recovery acceleration',
    ],
    benefits: [
      'Enhanced performance',
      'Accelerated recovery',
      'Improved circulation',
      'Pain relief',
      'Overall well-being',
      'Heightened energy',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Power Tablets': '4 units',
      'Neodymium Magnets': '1 unit',
      Technology: 'Acupuncture-based design',
    },
    images: ['/assets/images/products/kneePad.png'],
    tags: ['knee pad', 'FIR POWER', 'magnets', 'acupuncture', 'recovery'],
    translations: {
      es: {
        fullDescription:
          'La Energy Knee Pad está diseñada para potenciar tanto la recuperación como la vitalidad. Combina FIR POWER y magnetismo colocados estratégicamente sobre puntos de acupuntura en la rodilla, siguiendo los principios de los meridianos energéticos para estimular la circulación, aliviar el dolor y favorecer el bienestar general.',
        features: [
          '4 tabletas FIR Power',
          '1 imán de neodimio',
          'Enfoque en puntos de acupuntura',
          'Alineación con meridianos de energía',
          'Diseño innovador',
          'Enfoque en mejora del rendimiento',
          'Apoyo a la recuperación acelerada',
        ],
        benefits: [
          'Rendimiento físico potenciado',
          'Recuperación más rápida',
          'Mejor circulación alrededor de la rodilla',
          'Alivio del dolor',
          'Mayor sensación de bienestar',
          'Incremento de la energía',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '18',
    name: 'Elbow Strap',
    slug: 'elbow-strap',
    category: 'Support & Braces',
    shortDescription:
      'Energy Elbow Strap with FIR Power tablet and Neodymium Magnets for elbow support.',
    fullDescription:
      'Energy Elbow Strap - e-Energy/Nipponflex. Unique Size | Adjustable for Left and Right. Contains 01 FIR Power tablet and 02 Neodymium Magnets for enhanced elbow support and recovery.',
    features: [
      'Unique size adjustable',
      'Left and right compatible',
      '01 FIR Power tablet',
      '02 Neodymium Magnets',
      'Universal fit',
      'Enhanced support',
    ],
    benefits: [
      'Deep and restful sleep',
      'Increased muscular strength',
      'Enhanced physical activities',
      'Stress prevention',
      'Improved blood circulation',
      'Pain relief',
      'Better cellular activities',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Power Tablets': '1 unit',
      'Neodymium Magnets': '2 units',
      Size: 'Unique adjustable',
      Compatibility: 'Left and Right',
    },
    images: ['/assets/images/products/elbowStrap.png'],
    tags: ['elbow strap', 'FIR POWER', 'magnets', 'support', 'adjustable'],
    translations: {
      es: {
        fullDescription:
          'La Energy Elbow Strap de e‑Energy/Nipponflex es una banda de tamaño único y ajustable para brazo izquierdo o derecho. Incluye 1 tableta FIR Power y 2 imanes de neodimio para ofrecer soporte localizado y ayudar en los procesos de recuperación del codo.',
        features: [
          'Tamaño único ajustable',
          'Compatible con brazo izquierdo y derecho',
          '1 tableta FIR Power',
          '2 imanes de neodimio',
          'Ajuste universal',
          'Soporte reforzado en la zona del codo',
        ],
        benefits: [
          'Apoyo al sueño más profundo gracias al alivio del dolor',
          'Aumento de la fuerza muscular',
          'Mayor comodidad en actividades físicas',
          'Apoyo en la gestión del estrés físico',
          'Mejor circulación sanguínea',
          'Alivio de molestias articulares',
          'Apoyo a la función celular saludable',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
          ES_COMMON_WARNINGS.taxesAndFees,
        ],
      },
    },
  },
  {
    id: '19',
    name: 'Glove FIT',
    slug: 'glove-fit',
    category: 'Wellness Accessories',
    shortDescription:
      'Energy Glove with FIR Power tablets and Neodymium Magnets for hand protection and performance.',
    fullDescription:
      'Energy Glove - e-Energy/Nipponflex. Each pair contains: 02 FIR Power tablets and 04 Neodymium Magnet. Flexible and anatomical. Ideal for gym activities, cycling, motorcycling. Protection for fingers and pasterns.',
    features: [
      '02 FIR Power tablets per pair',
      '04 Neodymium Magnets per pair',
      'Flexible and anatomical design',
      'Ideal for gym activities',
      'Perfect for cycling',
      'Suitable for motorcycling',
      'Finger protection',
      'Pastern protection',
    ],
    benefits: [
      'Enhanced grip performance',
      'Hand protection',
      'Improved circulation',
      'Flexible movement',
      'Multi-activity use',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Power Tablets': '2 per pair',
      'Neodymium Magnets': '4 per pair',
      Design: 'Flexible and anatomical',
      Use: 'Gym, cycling, motorcycling',
    },
    images: ['/assets/images/products/gloveFit.png'],
    tags: ['gloves', 'FIR POWER', 'magnets', 'gym', 'cycling'],
    translations: {
      es: {
        fullDescription:
          'Los Energy Glove FIT de e‑Energy/Nipponflex incorporan 2 tabletas FIR Power y 4 imanes de neodimio por par. Con un diseño flexible y anatómico, son ideales para el gimnasio, el ciclismo y el motociclismo, proporcionando protección adicional para dedos y nudillos.',
        features: [
          '2 tabletas FIR Power por par',
          '4 imanes de neodimio por par',
          'Diseño flexible y anatómico',
          'Ideales para actividades de gimnasio',
          'Perfectos para ciclismo',
          'Aptos para motociclismo',
          'Protección para los dedos',
          'Protección para nudillos y dorso de la mano',
        ],
        benefits: [
          'Mejor agarre y desempeño',
          'Protección de las manos',
          'Apoyo a la circulación en la zona',
          'Mayor libertad de movimiento',
          'Uso versátil en diferentes actividades',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '20',
    name: 'Women´s Shorts',
    slug: 'womens-shorts',
    category: 'Wellness Apparel',
    shortDescription:
      'Women´s wellness shorts with FIR Power and Magnetic Field benefits.',
    fullDescription:
      'Women´s wellness shorts designed with FIR Power and Magnetic Field technology for enhanced comfort and wellness benefits during activities.',
    features: [
      'FIR Power technology',
      'Magnetic Field benefits',
      'Comfortable fit',
      'Women´s specific design',
      'Wellness enhancement',
    ],
    benefits: [
      'Deep and restful sleep',
      'Increased muscular strength',
      'Enhanced physical activities',
      'Stress prevention',
      'Improved blood circulation',
      'Pain relief',
      'Better cellular activities',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      Gender: 'Women´s',
      Technology: 'FIR Power + Magnetic Field',
    },
    images: ['/assets/images/products/shorts.png'],
    tags: ['shorts', 'FIR POWER', 'magnets', 'women', 'wellness'],
    translations: {
      es: {
        fullDescription:
          'Shorts de bienestar para mujer diseñados con tecnología FIR Power y campo magnético para aportar confort y beneficios durante la actividad diaria.',
        features: [
          'Tecnología FIR Power',
          'Beneficios de campo magnético',
          'Ajuste cómodo',
          'Diseño específico para mujer',
          'Enfoque en el bienestar durante el uso',
        ],
        benefits: [
          'Apoyo al sueño profundo y reparador',
          'Mayor fuerza muscular',
          'Mejor rendimiento físico',
          'Apoyo en la prevención del estrés',
          'Mejor circulación sanguínea',
          'Alivio de dolores y molestias',
          'Apoyo a la actividad celular saludable',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
          ES_COMMON_WARNINGS.taxesAndFees,
        ],
      },
    },
  },
  {
    id: '21',
    name: 'Capri Legging',
    slug: 'capri-legging',
    category: 'Wellness Apparel',
    shortDescription:
      'FIR POWER-infused Capri Leggings merging fashion and technology.',
    fullDescription:
      'Discover the ultimate revolution in leggings with our all-new FIR POWER-infused Capri Leggings. Experience the merging of fashion and technology as innovative FIR POWER technology is seamlessly embedded into these leggings. FIR POWER is a cutting-edge technology that utilizes far-infrared rays to enhance circulation and stimulate the body´s natural healing processes. By wearing our Capri Leggings, you´ll not only stay stylish but also benefit from the therapeutic effects of FIR POWER throughout your workout or everyday activities.',
    features: [
      'Contains 7 FIR Bioceramic',
      '14 Neodymium Magnets',
      '7 steel flexible rods',
      'High-quality fabric',
      'Breathable material',
      'Moisture-wicking',
      'Quick-drying',
      'Capri length design',
    ],
    benefits: [
      'Enhanced circulation',
      'Natural healing stimulation',
      'Reduced muscle fatigue',
      'Enhanced performance',
      'Stylish appearance',
      'Maximum comfort',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Bioceramic': '7 units',
      'Neodymium Magnets': '14 units',
      'Steel Rods': '7 flexible rods',
      Length: 'Capri',
    },
    images: ['/assets/images/products/capriLeggin.png'],
    tags: ['capri leggings', 'FIR POWER', 'magnets', 'fashion', 'wellness'],
    translations: {
      es: {
        fullDescription:
          'Las Capri Legging con FIR POWER representan una revolución en leggings: combinan moda y tecnología gracias a la integración de FIR POWER en el tejido. Esta tecnología utiliza rayos infrarrojos lejanos para favorecer la circulación y estimular los procesos naturales de recuperación del cuerpo.',
        features: [
          'Contiene 7 unidades de FIR Bioceramic',
          '14 imanes de neodimio',
          '7 varillas de acero flexibles',
          'Tejido de alta calidad',
          'Material transpirable',
          'Tejido que absorbe la humedad',
          'Secado rápido',
          'Diseño tipo capri',
        ],
        benefits: [
          'Circulación mejorada',
          'Estimulación de los procesos naturales de recuperación',
          'Reducción de la fatiga muscular',
          'Mayor rendimiento físico',
          'Aspecto moderno y estilizado',
          'Máxima comodidad durante el uso',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '22',
    name: 'Young FIR Power Bracelet',
    slug: 'young-fir-power-bracelet',
    category: 'Wellness Accessories',
    shortDescription:
      'Stylish leather bracelet with FIR POWER technology for wellness and fashion.',
    fullDescription:
      'Introducing the Bracelet Young FIR - The perfect blend of style and wellness. Crafted from genuine leather, this bracelet not Only exudes modernity and sophistication but also harnesses the power of FIR POWER technology. Experience the incredible benefits of FIR POWER right on your wrist. The advanced technology embedded in the Bracelet Young FIR emits far-infrared rays, which are known to promote better blood circulation, reduce muscle tension, and enhance overall well-being. Feel the gentle warmth as it works its magic, providing you with a renewed sense of vitality and energy.',
    features: [
      'Genuine leather construction',
      'FIR POWER technology embedded',
      'Far-infrared ray emission',
      'Modern and sophisticated design',
      'Versatile accessory',
      'Gentle warmth generation',
    ],
    benefits: [
      'Better blood circulation',
      'Reduced muscle tension',
      'Enhanced overall well-being',
      'Renewed vitality and energy',
      'Stylish appearance',
      'Versatile fashion accessory',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuri-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other Implants With Batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      Material: 'Genuine leather',
      Technology: 'FIR POWER',
      Style: 'Modern and sophisticated',
    },
    images: ['/assets/images/products/powerBracelet.png'],
    tags: ['bracelet', 'FIR POWER', 'leather', 'fashion', 'wellness'],
    translations: {
      es: {
        fullDescription:
          'La pulsera Young FIR es la combinación perfecta entre estilo y bienestar. Fabricada en cuero genuino, ofrece un aspecto moderno y sofisticado mientras integra la tecnología FIR POWER, que emite rayos infrarrojos lejanos para favorecer la circulación, reducir la tensión muscular y apoyar el bienestar general.',
        features: [
          'Construcción en cuero auténtico',
          'Tecnología FIR POWER integrada',
          'Emisión de rayos infrarrojos lejanos',
          'Diseño moderno y sofisticado',
          'Accesorio versátil para el día a día',
          'Sensación de calidez suave al uso',
        ],
        benefits: [
          'Mejor circulación sanguínea',
          'Reducción de la tensión muscular',
          'Apoyo al bienestar general',
          'Sensación renovada de vitalidad y energía',
          'Complemento estético y funcional',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '23',
    name: 'Men´s Flip Flops',
    slug: 'mens-flip-flops',
    category: 'Footwear',
    shortDescription:
      'Men´s flip flops with FIR POWER technology and reflexology-inspired magnetic therapy.',
    fullDescription:
      'Step into the ultimate comfort and wellness experience with Men´s Flip Flops. These sandals are not your ordinary footwear – they are equipped with advanced FIR POWER technology and strategically placed magnets inspired by the principles of reflexology. Experience the soothing effects of FIR POWER combined with the targeted benefits of magnetic therapy. The Flip Flops feature cushioned soles with FIR POWER technology, promoting better blood circulation and providing a sense of relaxation and rejuvenation with every step.',
    features: [
      '6 FIR Power Tablets',
      '14 Special Magnets',
      'Comfortable and durable construction',
      'Reflexology-inspired design',
      'Cushioned soles',
      'Strategic magnet placement',
      'Advanced FIR POWER technology',
    ],
    benefits: [
      'Better blood circulation',
      'Relaxation and rejuvenation',
      'Reflexology benefits',
      'Overall balance and well-being',
      'Enhanced comfort',
      'Wellness with every step',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Power Tablets': '6 units',
      'Special Magnets': '14 units',
      Design: 'Reflexology-inspired',
      Durability: 'Comfortable and durable',
    },
    images: ['/assets/images/products/menFlipFlop.png'],
    tags: ['flip flops', 'FIR POWER', 'magnets', 'reflexology', 'men'],
    translations: {
      es: {
        fullDescription:
          'Las Men´s Flip Flops de Nipponflex no son unas chanclas cualquiera: integran tecnología FIR POWER avanzada y un sistema de imanes inspirados en la reflexología. Sus plantillas acolchadas con FIR POWER ayudan a mejorar la circulación y ofrecen una sensación de relajación y renovación en cada paso.',
        features: [
          '6 tabletas FIR Power',
          '14 imanes especiales',
          'Construcción cómoda y duradera',
          'Diseño inspirado en la reflexología',
          'Suela acolchada',
          'Colocación estratégica de los imanes',
          'Tecnología FIR POWER avanzada',
        ],
        benefits: [
          'Mejor circulación sanguínea',
          'Sensación de relax y renovación',
          'Beneficios asociados a la reflexología',
          'Mayor equilibrio y bienestar general',
          'Confort superior al caminar',
          'Bienestar en cada paso',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '25',
    name: 'Blue Insole',
    slug: 'blue-insole',
    category: 'Footwear',
    shortDescription:
      'Innovative Magnetic Insole Blue with FIR POWER and Magnetism technologies.',
    fullDescription:
      'Introducing our innovative Magnetic Insole Blue - the ultimate in foot comfort and therapy. With advanced FIR POWER and Magnetism technologies integrated, this insole provides exceptional support for your feet. Crafted from flexible PVC material, our Magnetic Insole Blue molds comfortably to your foot contours, ensuring a snug fit and customized comfort throughout the day. Indulge in the refreshing scent of eucalyptus as the built-in essence revitalizes and rejuvenates your senses with each step.',
    features: [
      'Flexible PVC construction',
      '4x FIR Power Tablets (8 in total - pair)',
      '18 Special Magnets (36 in total - pair)',
      'Eucalyptus essence infusion',
      'Customized comfort',
      'Foot contouring design',
    ],
    benefits: [
      'Exceptional foot support',
      'Improved blood circulation',
      'Pressure relief',
      'Acupressure point stimulation',
      'Refreshing eucalyptus aroma',
      'Customized comfort',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      Material: 'Flexible PVC',
      'FIR Power Tablets': '4 per foot (8 total)',
      'Special Magnets': '18 per foot (36 total)',
      Sizes:
        'Small M: 3-5 or W: 4-6.5, Medium M: 6-8 or W: 7.5-9.5, Large M: 8-11.5 or W: 9.5-13 (All Adjustable)',
      Essence: 'Eucalyptus',
    },
    images: ['/assets/images/products/blueSoles.png'],
    tags: ['insole', 'FIR POWER', 'magnets', 'eucalyptus', 'blue'],
    translations: {
      es: {
        fullDescription:
          'Las plantillas Magnetic Insole Blue son una solución innovadora para el confort y la terapia de los pies. Fabricadas en PVC flexible, se adaptan a la forma del pie proporcionando soporte personalizado. Integran tecnología FIR POWER, magnetismo y una esencia de eucalipto que aporta una sensación de frescor y revitalización a cada paso.',
        features: [
          'Construcción en PVC flexible',
          '4 tabletas FIR Power por pie (8 en total el par)',
          '18 imanes especiales por pie (36 en total el par)',
          'Infusión de esencia de eucalipto',
          'Ajuste confortable',
          'Diseño que se adapta a la forma del pie',
        ],
        benefits: [
          'Soporte excepcional para los pies',
          'Mejor circulación sanguínea',
          'Alivio de puntos de presión',
          'Estimulación de puntos de acupresión en la planta del pie',
          'Aroma refrescante a eucalipto',
          'Confort personalizado durante la marcha',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '26',
    name: 'Shoulder Strap',
    slug: 'shoulder-strap',
    category: 'Support & Braces',
    shortDescription:
      'Energy Shoulder Strap with FIR Power tablets and Neodymium Magnets for shoulder support.',
    fullDescription:
      'Energy Shoulder Strap - e-Energy/Nipponflex. Unique Size | Adjustable for Left and Right. Contains: 03 FIR Power tablets and 02 Neodymium Magnets for enhanced shoulder support and wellness benefits.',
    features: [
      'Unique size adjustable',
      'Left and right compatible',
      '03 FIR Power tablets',
      '02 Neodymium Magnets',
      'Universal shoulder fit',
      'Enhanced support system',
    ],
    benefits: [
      'Deep and restful sleep',
      'Increased muscular strength',
      'Enhanced physical activities',
      'Stress prevention',
      'Improved blood circulation',
      'Pain relief',
      'Better cellular activities',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Power Tablets': '3 units',
      'Neodymium Magnets': '2 units',
      Size: 'Unique adjustable',
      Compatibility: 'Left and Right',
    },
    images: ['/assets/images/products/shoulderStrap.png'],
    tags: ['shoulder strap', 'FIR POWER', 'magnets', 'support', 'adjustable'],
    translations: {
      es: {
        fullDescription:
          'La Energy Shoulder Strap de e‑Energy/Nipponflex es una banda de tamaño único y ajustable para hombro izquierdo o derecho. Incorpora 3 tabletas FIR Power y 2 imanes de neodimio para ofrecer soporte localizado y beneficios de bienestar en la zona del hombro.',
        features: [
          'Talla única ajustable',
          'Compatible con hombro izquierdo y derecho',
          '3 tabletas FIR Power',
          '2 imanes de neodimio',
          'Ajuste universal para el hombro',
          'Sistema de soporte reforzado',
        ],
        benefits: [
          'Apoyo al sueño más profundo gracias a la reducción del malestar',
          'Mayor fuerza muscular en la zona',
          'Mejor rendimiento físico en actividades cotidianas',
          'Apoyo en la prevención del estrés físico',
          'Mejor circulación y alivio del dolor',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '27',
    name: 'Wellness Kit Premium',
    slug: 'wellness-kit-premium',
    category: 'Wellness Kits',
    shortDescription:
      'Complete wellness kit with Bracelet FIR Power, Ion Balls, and Insole Black.',
    fullDescription:
      'Experience the extraordinary power of the Wellness Kit - Perfect combination of the Bracelet FIR Power, Ion Balls, and Insole Black. This kit provides everything you need to tap into our incredible energies. The Bracelet FIR Power is not your fashion accessory. With its advanced FIR Power technology, it features two ceramic disks that emit far-infrared rays, which have been shown to promote better circulation, enhance relaxation, and support overall well-being.',
    features: [
      '1x Squeeze with Ion Balls',
      '1x Large FIR ION Bracelet in black color',
      '1 pair of Blue insole',
      '1x e-Energy Button',
      '1x e-Energy Catalogue',
      'Complete wellness solution',
      'Advanced FIR Power technology',
    ],
    benefits: [
      'Better circulation',
      'Enhanced relaxation',
      'Overall well-being support',
      'Air quality enhancement',
      'Stress reduction',
      'Mental clarity improvement',
      'Complete energy solution',
    ],
    specifications: {
      'Kit Contents': 'Bracelet, Ion Balls, Insole, Button, Catalog',
      'Bracelet Size': 'Large',
      'Insole Color': 'Blue',
      'Complete Package': 'Yes',
    },
    images: ['/assets/images/products/wellnessKitPremium.png'],
    tags: ['wellness kit', 'FIR POWER', 'ion balls', 'bracelet', 'complete'],
    translations: {
      es: {
        fullDescription:
          'El Wellness Kit Premium combina la pulsera FIR Power, las Ion Balls y las plantillas negras para ofrecer un conjunto completo de tecnologías de bienestar. Este kit reúne todo lo necesario para aprovechar las energías FIR, magnética y de iones negativos en diferentes áreas del cuerpo.',
        features: [
          '1 botella squeeze con Ion Balls',
          '1 pulsera FIR ION grande en color negro',
          '1 par de plantillas azules',
          '1 botón e‑Energy',
          '1 catálogo e‑Energy',
          'Solución de bienestar integral',
          'Tecnología FIR Power avanzada',
        ],
        benefits: [
          'Mejor circulación',
          'Mayor relajación',
          'Apoyo integral al bienestar general',
          'Mejor percepción de la calidad del aire y del entorno',
          'Reducción del estrés',
          'Mayor claridad mental',
          'Kit energético completo para el hogar',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '28',
    name: 'NipponCar Seat Cover',
    slug: 'nipponcar-seat-cover',
    category: 'Automotive',
    shortDescription:
      'NipponCar Seat by Nipponflex for postural correction and driving comfort.',
    fullDescription:
      'The NipponCar Seat by Nipponflex helps with postural correction, as well as providing a feeling of well-being while driving your vehicle. It has the technologies: FIR Power and Magnets. It is adaptable to all models of seats and cars.',
    features: [
      'FIR Power technology',
      'Magnetic field benefits',
      'Postural correction support',
      'Universal car seat compatibility',
      'Adaptable to all models',
      'Driving comfort enhancement',
    ],
    benefits: [
      'Postural correction',
      'Enhanced driving comfort',
      'Better blood circulation',
      'Stress reduction while driving',
      'Improved well-being',
      'Universal compatibility',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      Compatibility: 'All car models',
      Purpose: 'Postural correction',
      Installation: 'Universal fit',
    },
    images: ['/assets/images/products/carCover.png'],
    tags: ['car seat', 'FIR POWER', 'magnets', 'posture', 'automotive'],
    translations: {
      es: {
        fullDescription:
          'El NipponCar Seat de Nipponflex ayuda a mejorar la postura y proporciona una sensación de bienestar al conducir. Incorpora tecnologías FIR Power y Magnetos, y es adaptable a todo tipo de asientos y modelos de vehículos.',
        features: [
          'Tecnología FIR Power',
          'Beneficios del campo magnético',
          'Apoyo a la corrección postural',
          'Compatibilidad universal con asientos de coche',
          'Adaptable a todo tipo de modelos',
          'Mejora del confort al conducir',
        ],
        benefits: [
          'Corrección de la postura',
          'Mayor confort al conducir',
          'Mejor circulación sanguínea',
          'Reducción del estrés durante la conducción',
          'Mejora del bienestar general',
          'Compatibilidad universal',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '29',
    name: 'FIR ION Triple Energy 11 Colors Bracelet KIT',
    slug: 'fir-ion-11-colors-bracelet-kit',
    category: 'Wellness Kits',
    shortDescription:
      'Exclusive FIR ION Bracelet Kit with eleven incredible bracelets for the price of ten.',
    fullDescription:
      'Introducing our exclusive FIR ION Bracelet Kit from E-Energy, designed to elevate your wellness journey. This extraordinary kit offers not just one or two, but eleven incredible FIR ION Bracelets, all for the price of ten! Each bracelet in this kit is embedded with FIR POWER and ION BALLS, creating a powerful synergy for enhanced well-being. The FIR POWER technology harnesses the therapeutic benefits of far-infrared rays, improving blood circulation, reducing muscle soreness, and promoting overall vitality.',
    features: [
      '11 FIR ION Bracelets included',
      '22 FIR Power Tablets total',
      '22 Ion Balls total',
      '22 Magnet tablets total',
      'Multiple color options',
      'Stackable design',
      'Price of 10, get 11',
    ],
    benefits: [
      'Enhanced well-being on multiple levels',
      'Improved blood circulation',
      'Reduced muscle soreness',
      'Promoted vitality',
      'Boosted energy levels',
      'Calming and balancing effect',
      'Shareable with loved ones',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-stimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      Quantity: '11 bracelets',
      'FIR Power Tablets': '22 total',
      'Ion Balls': '22 total',
      'Magnet Tablets': '22 total',
      Colors: '11 different colors',
    },
    images: [
      '/assets/images/products/firIonTripleEnergy11colorsBraceletKit.png',
    ],
    tags: ['bracelet kit', 'FIR POWER', 'ion balls', 'magnets', '11 colors'],
    translations: {
      es: {
        fullDescription:
          'El exclusivo Kit de Pulseras FIR ION de E‑Energy está diseñado para elevar tu experiencia de bienestar. Incluye once pulseras FIR ION por el precio de diez. Cada pulsera combina FIR POWER e Ion Balls, creando una sinergia poderosa que favorece la circulación, ayuda a reducir la fatiga muscular y apoya la vitalidad general.',
        features: [
          '11 pulseras FIR ION en el kit',
          '22 tabletas FIR Power en total',
          '22 Ion Balls en total',
          '22 tabletas magnéticas en total',
          'Amplia gama de colores',
          'Diseño apilable para usar varias pulseras a la vez',
          'Promoción: paga 10 y recibe 11',
        ],
        benefits: [
          'Apoyo al bienestar en múltiples niveles',
          'Mejor circulación sanguínea',
          'Reducción de la sensación de cansancio muscular',
          'Mayor vitalidad y energía',
          'Efecto calmante y de equilibrio',
          'Ideal para compartir con familiares y amigos',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '30',
    name: 'FIR ION Black Bracelet',
    slug: 'fir-ion-black-bracelet',
    category: 'Wellness Accessories',
    shortDescription:
      'Bracelet FIR ION Black with FIR POWER, ION BALLS, and MAGNETOS for healing experience.',
    fullDescription:
      'Transform your well-being with the Bracelet FIR ION Black by E-Energy Nipponflex. This remarkable bracelet harnesses the powerful energies of FIR POWER, ION BALLS, and MAGNETOS to provide you with an unparalleled healing experience. The strategically placed magnets target specific acupuncture points, replicating the benefits of acupuncture therapy. Feel the revitalizing effects as the FIR technology penetrates deep into your body, promoting circulation, relieving aches and pains, and harmonizing your energy.',
    features: [
      '2 FIR Power Tablets',
      '2 Ion Balls',
      '2 Magnet tablets',
      'Acupuncture point targeting',
      'Strategic magnet placement',
      'Deep FIR penetration',
      'Black color design',
    ],
    benefits: [
      'Unparalleled healing experience',
      'Acupuncture therapy benefits',
      'Promoted circulation',
      'Aches and pains relief',
      'Energy harmonization',
      'Enhanced vitality',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-stimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Power Tablets': '2 units',
      'Ion Balls': '2 units',
      'Magnet Tablets': '2 units',
      Color: 'Black',
    },
    images: ['/assets/images/products/firIonBlackBracelet.png'],
    tags: ['bracelet', 'FIR POWER', 'ion balls', 'magnets', 'black'],
    translations: {
      es: {
        fullDescription:
          'La pulsera FIR ION Black de E‑Energy Nipponflex combina las energías de FIR POWER, Ion Balls y magnetos para proporcionar una experiencia de bienestar única. Los imanes se sitúan en puntos de acupuntura, buscando reproducir los beneficios de la acupuntura tradicional, mientras la tecnología FIR ayuda a estimular la circulación y aliviar molestias.',
        features: [
          '2 tabletas FIR Power',
          '2 Ion Balls',
          '2 tabletas magnéticas',
          'Enfoque en puntos de acupuntura',
          'Colocación estratégica de los imanes',
          'Alta penetración del infrarrojo lejano',
          'Diseño en color negro',
        ],
        benefits: [
          'Experiencia de bienestar profunda',
          'Beneficios inspirados en la acupuntura',
          'Mejor circulación',
          'Alivio de dolores y molestias',
          'Armonización de la energía corporal',
          'Mayor sensación de vitalidad',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '31',
    name: 'FIR ION Black Bicolor Bracelet',
    slug: 'fir-ion-black-bicolor-bracelet',
    category: 'Wellness Accessories',
    shortDescription:
      'Bracelet FIR ION Bicolor with FIR POWER, ION BALLS, and MAGNETOS for enhanced wellness.',
    fullDescription:
      'Transform your well-being with the Bracelet FIR ION Bicolor by E-Energy Nipponflex. This remarkable bracelet harnesses the powerful energies of FIR POWER, ION BALLS, and MAGNETOS to provide you with an unparalleled healing experience. The strategically placed magnets target specific acupuncture points, replicating the benefits of acupuncture therapy. Feel the revitalizing effects as the FIR technology penetrates deep into your body, promoting circulation, relieving aches and pains, and harmonizing your energy.',
    features: [
      '2 FIR Power Tablets',
      '2 Ion Balls',
      '2 Magnet Tablets',
      'Bicolor design',
      'Acupuncture point targeting',
      'Strategic magnet placement',
      'Enhanced aesthetics',
    ],
    benefits: [
      'Unparalleled healing experience',
      'Acupuncture therapy benefits',
      'Enhanced circulation',
      'Pain relief',
      'Energy harmonization',
      'Stylish bicolor appearance',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Power Tablets': '2 units',
      'Ion Balls': '2 units',
      'Magnet Tablets': '2 units',
      Design: 'Black Bicolor',
    },
    images: ['/assets/images/products/bicolorBracelet.png'],
    tags: ['bracelet', 'FIR POWER', 'ion balls', 'magnets', 'bicolor'],
    translations: {
      es: {
        fullDescription:
          'La pulsera FIR ION Bicolor de E‑Energy Nipponflex combina FIR POWER, Ion Balls y magnetos en un diseño de dos colores. Está pensada para ofrecer los mismos beneficios inspirados en la acupuntura que el modelo clásico, añadiendo un acabado estético más llamativo.',
        features: [
          '2 tabletas FIR Power',
          '2 Ion Balls',
          '2 tabletas magnéticas',
          'Diseño bicolor',
          'Enfoque en puntos de acupuntura',
          'Distribución estratégica de los imanes',
          'Aspecto estético mejorado',
        ],
        benefits: [
          'Experiencia de bienestar intensa',
          'Beneficios inspirados en la acupuntura',
          'Mejor circulación',
          'Alivio del dolor y la tensión',
          'Armonización energética',
          'Estilo bicolor elegante y distintivo',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
  {
    id: '32',
    name: 'FIR ION Gray Bicolor Bracelet',
    slug: 'fir-ion-gray-bicolor-bracelet',
    category: 'Wellness Accessories',
    shortDescription:
      'Bracelet FIR ION Gray with FIR POWER, ION BALLS, and MAGNETOS for wellness enhancement.',
    fullDescription:
      'Transform your well-being with the Bracelet FIR ION by E-Energy Nipponflex. This remarkable bracelet harnesses the powerful energies of FIR POWER, ION BALLS, and MAGNETOS to provide you with an unparalleled healing experience. The strategically placed magnets target specific acupuncture points, replicating the benefits of acupuncture therapy. Feel the revitalizing effects as the FIR technology penetrates deep into your body, promoting circulation, relieving aches and pains, and harmonizing your energy.',
    features: [
      '2 FIR Power Tablets',
      '2 Ion Balls',
      '2 Magnet tablets',
      'Gray bicolor design',
      'Acupuncture point targeting',
      'Strategic magnet placement',
      'Elegant appearance',
    ],
    benefits: [
      'Unparalleled healing experience',
      'Acupuncture therapy benefits',
      'Enhanced circulation',
      'Pain relief',
      'Energy harmonization',
      'Elegant gray styling',
    ],
    warnings: [
      'Magnets are prohibited for persons who use or have: Pacemakers, Neuro-estimulators, Defibrillators, Insulin Pumps, Cochlear Implants, Other implants with batteries',
      'The magnetic field can cause interference in the battery operation',
      'Results may vary and are not guaranteed',
      'This product does not substitute any medical treatment',
    ],
    specifications: {
      'FIR Power Tablets': '2 units',
      'Ion Balls': '2 units',
      'Magnet Tablets': '2 units',
      Design: 'Gray Bicolor',
    },
    images: ['/assets/images/products/grayBicolorBracelet.png'],
    tags: ['bracelet', 'FIR POWER', 'ion balls', 'magnets', 'gray'],
    translations: {
      es: {
        fullDescription:
          'La pulsera FIR ION Gray Bicolor combina la tecnología FIR POWER, las Ion Balls y los magnetos en un diseño gris bicolor elegante. Al igual que otros modelos FIR ION, está diseñada para trabajar sobre puntos de acupuntura y favorecer la circulación y el equilibrio energético.',
        features: [
          '2 tabletas FIR Power',
          '2 Ion Balls',
          '2 tabletas magnéticas',
          'Diseño gris bicolor',
          'Enfoque en puntos de acupuntura',
          'Colocación estratégica de los imanes',
          'Estética sobria y elegante',
        ],
        benefits: [
          'Experiencia de bienestar global',
          'Beneficios inspirados en la acupuntura',
          'Mejor circulación',
          'Alivio del dolor y la tensión',
          'Armonización de la energía corporal',
          'Estilo discreto y sofisticado',
        ],
        warnings: [
          ES_COMMON_WARNINGS.magnetsImplants,
          ES_COMMON_WARNINGS.magneticInterference,
          ES_COMMON_WARNINGS.resultsMayVary,
          ES_COMMON_WARNINGS.notMedicalTreatment,
        ],
      },
    },
  },
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): EduProduct | undefined {
  return products.find((product) => product.slug === slug);
}

// Helper function to get products by category
export function getProductsByCategory(category: string): EduProduct[] {
  return products.filter((product) => product.category === category);
}

// Helper function to get all categories
export function getCategories(): string[] {
  const categories = [...new Set(products.map((product) => product.category))];
  return categories.sort((a, b) => a.localeCompare(b));
}
