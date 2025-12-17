<template>
  <div class="min-h-screen">
    <!-- Page Header -->
    <section
      class="py-16 lg:py-20 bg-gradient-to-br from-ecuador-blue to-ecuador-blue/90 text-white relative overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-10 left-10 w-64 h-64 bg-ecuador-yellow rounded-full filter blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-48 h-48 bg-ecuador-red rounded-full filter blur-3xl animate-float"
        ></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1
            class="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up"
          >
            Nipponflex Technology
          </h1>
          <div
            class="w-24 h-1 bg-gradient-to-r from-ecuador-yellow to-white mx-auto mb-8"
          ></div>
          <p
            class="text-lg md:text-xl text-blue-100 leading-relaxed animate-fade-in-up"
            style="animation-delay: 0.2s"
          >
            Discover the innovative Nipponflex technologies that Eduardo offers
            through his authorised distribution. Each technology represents
            years of research and development, combining traditional wellness
            wisdom with cutting-edge scientific advances.
          </p>

          <!-- Technology Overview Stats -->
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up"
            style="animation-delay: 0.4s"
          >
            <div
              v-for="(stat, index) in technologyStats"
              :key="index"
              class="text-center"
            >
              <div
                class="text-2xl md:text-3xl font-bold text-ecuador-yellow mb-1"
              >
                {{ stat.value }}
              </div>
              <div class="text-sm text-blue-200">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8">
        <!-- Section Introduction -->
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2
            class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6"
          >
            Revolutionary Wellness Technologies
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Nipponflex technologies work synergistically to provide
            comprehensive wellness benefits. Each technology has been carefully
            developed and tested to ensure maximum effectiveness and safety.
          </p>
        </div>

        <!-- Technology Cards Grid -->
        <div class="space-y-8">
          <div
            v-for="(technology, index) in technologies"
            :key="technology.id"
            class="animate-fade-in-up"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <TechnologyCard
              :technology="technology"
              :initial-open="index === 0"
            />
          </div>
        </div>

        <!-- Technology Comparison -->
        <div class="mt-20">
          <h3
            class="text-2xl md:text-3xl font-display font-bold text-gray-900 text-center mb-12"
          >
            Technology Benefits Comparison
          </h3>

          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead class="bg-ecuador-blue text-white">
                <tr>
                  <th class="px-6 py-4 text-left font-semibold">Technology</th>
                  <th class="px-6 py-4 text-center font-semibold">
                    Relaxation
                  </th>
                  <th class="px-6 py-4 text-center font-semibold">Recovery</th>
                  <th class="px-6 py-4 text-center font-semibold">
                    Sleep Quality
                  </th>
                  <th class="px-6 py-4 text-center font-semibold">
                    Energy Balance
                  </th>
                  <th class="px-6 py-4 text-center font-semibold">
                    Pain Relief
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr
                  v-for="tech in technologies.slice(0, 5)"
                  :key="`table-${tech.id}`"
                  class="hover:bg-gray-50"
                >
                  <td class="px-6 py-4 font-medium text-gray-900">
                    {{ tech.title }}
                  </td>
                  <td class="px-6 py-4 text-center">
                    <div class="flex justify-center">
                      <RatingStars :rating="tech.ratings?.relaxation || 3" />
                    </div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <div class="flex justify-center">
                      <RatingStars :rating="tech.ratings?.recovery || 3" />
                    </div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <div class="flex justify-center">
                      <RatingStars :rating="tech.ratings?.sleep || 3" />
                    </div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <div class="flex justify-center">
                      <RatingStars :rating="tech.ratings?.energy || 3" />
                    </div>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <div class="flex justify-center">
                      <RatingStars :rating="tech.ratings?.pain || 3" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-16 bg-gradient-to-r from-ecuador-yellow to-ecuador-blue text-white"
    >
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-6">
            Experience Nipponflex Technology
          </h2>
          <p class="text-lg mb-8 opacity-90">
            Ready to experience the benefits of Nipponflex's revolutionary
            wellness technologies? Explore the products or get in touch with
            Eduardo Penafiel to learn more about the right solutions for you.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/products" class="btn-secondary text-center">
              Browse Products
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ecuador-blue transition-colors duration-300 text-center"
            >
              Contact Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Technology {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
  features?: string[];
  benefits?: string[];
  ratings?: {
    relaxation?: number;
    recovery?: number;
    sleep?: number;
    energy?: number;
    pain?: number;
  };
  applications?: string[];
  learnMoreUrl?: string;
}

interface TechnologyStat {
  value: string;
  label: string;
}

interface ResearchMilestone {
  title: string;
  description: string;
}

// Meta data
useHead({
  title: 'Technology - EDUP GlobalFlex | Innovative Wellness Solutions',
  meta: [
    {
      name: 'description',
      content:
        "Discover Nipponflex's revolutionary wellness technologies available through Eduardo: Rabatan®, FIR Bioceramic®, Ion Balls, MFP, G-Zero® and more advanced solutions for personalised wellbeing.",
    },
  ],
});

const technologyStats: TechnologyStat[] = [
  { value: '8', label: 'Core Technologies' },
  { value: '15+', label: 'Years Research' },
  { value: '100+', label: 'Patents' },
  { value: '25+', label: 'Countries' },
];

const technologies: Technology[] = [
  {
    id: 'rabatan',
    title: 'Rabatan®',
    subtitle: 'Advanced Material Technology',
    description:
      "Rabatan®, which comprises the top layer of Nipponflex's sleep products, is a hi-tech profiled polyurethane vulcanised at a temperature of approximately 360° F. Its structure of thousands of firm acupressure points mimics a masseuse's fingertips, providing relaxing self-massage. This very same feature also allows for increased space between your body and the support surface, thereby maximising ventilation and thermal comfort as you sleep.",
    features: [
      'Advanced molecular structure for optimum energy transfer',
      'Enhanced durability and longevity',
      'Synergistic effects with other wellness technologies',
      'Temperature-responsive properties',
      'Antimicrobial surface treatment',
    ],
    benefits: [
      'Improved circulation and blood flow',
      'Enhanced relaxation response',
      'Accelerated recovery processes',
      'Natural pain relief',
      'Better sleep quality',
    ],
    ratings: {
      relaxation: 5,
      recovery: 5,
      sleep: 4,
      energy: 4,
      pain: 5,
    },
    applications: [
      'Wellness Mats',
      'Therapeutic Cushions',
      'Sleep Systems',
      'Recovery Products',
    ],
  },
  {
    id: 'fir-bioceramic',
    title: 'FIR Bioceramic® & FIR NG®',
    subtitle: 'Far-Infrared Technology',
    description:
      'The powerful FIR Bioceramic® and FIR NG® technologies have the ability to absorb and store electrons from the electromagnetic frequency emitted by light. They emit wave frequencies of 4 to 16 microns and trillions of vibrations. These technologies are exclusively supplied to Nipponflex by the world-renowned Japanese scientist, Dr. Toshio Komuro, who has patents published in 27 countries. The technologies FIR Bioceramic® and FIR NG® are present, in the form of tablets applied in the low relief of Rabatan®, in Scientific Sleeping Systems and in Nipponflex pillows.',
    features: [
      'Deep tissue penetration up to 4-6cm',
      'Optimum wavelength range (4-14 microns)',
      'Natural mineral-based composition',
      'Long-lasting effectiveness',
      'Safe, non-invasive therapy',
    ],
    benefits: [
      'Enhanced blood circulation',
      'Improved oxygen delivery',
      'Natural detoxification support',
      'Muscle tension relief',
      'Metabolic enhancement',
    ],
    ratings: {
      relaxation: 4,
      recovery: 5,
      sleep: 5,
      energy: 3,
      pain: 4,
    },
    applications: [
      'Therapeutic Pillows',
      'Heating Pads',
      'Wellness Mats',
      'Sleep Products',
    ],
  },
  {
    id: 'ion-balls',
    title: 'Íon Balls',
    subtitle: 'Negative Ion Technology',
    description:
      'Spheres produced with rare minerals of very high purity, which emit negative ions, responsible for the feelings of well-being and tranquillity felt when having contact with nature, neutralising the positive ions created by urban life and which harm the body. Technology developed in Japan by scientist Dr. Toshio Komuro and supplied exclusively to Nipponflex.',
    features: [
      'Continuous negative ion generation',
      'Natural mineral composition',
      'Long-term effectiveness (5+ years)',
      'Maintenance-free operation',
      'Environmentally friendly',
    ],
    benefits: [
      'Improved air quality perception',
      'Enhanced mental clarity',
      'Stress reduction',
      'Better mood balance',
      'Increased energy levels',
    ],
    ratings: {
      relaxation: 4,
      recovery: 3,
      sleep: 3,
      energy: 5,
      pain: 2,
    },
    applications: [
      'Therapy Balls',
      'Wellness Accessories',
      'Environmental Products',
      'Personal Care Items',
    ],
  },
  {
    id: 'mfp',
    title: 'MFP – Magnetic FIR Power®',
    subtitle: 'Magnetic Therapy Integration',
    description:
      'It brings together the energies of the magnet and the FIR Power in a single insert, in which one energy enhances the other. The technology was developed by Nipponflex in conjunction with Japanese scientist Toshio Komuro and is patented in more than 40 countries. MFP is available for all ARS lines.',
    features: [
      'Synergistic magnetic and FIR therapy',
      'Strategically positioned magnetic elements',
      'Optimized field strength and placement',
      'Enhanced circulation effects',
      'Dual-action wellness benefits',
    ],
    benefits: [
      'Improved blood circulation',
      'Reduced inflammation',
      'Enhanced recovery speed',
      'Natural pain management',
      'Better nutrient delivery',
    ],
    ratings: {
      relaxation: 4,
      recovery: 5,
      sleep: 3,
      energy: 4,
      pain: 5,
    },
    applications: [
      'Magnetic Cushions',
      'Therapy Wraps',
      'Wellness Mats',
      'Recovery Products',
    ],
  },
  {
    id: 'g-zero',
    title: 'G-Zero® Advanced Progressive Density',
    subtitle: 'Pressure Distribution Technology',
    description:
      'The new generation of progressive density Nipponflex provides perfect distribution of body weight, delivering the future of comfort and ergonomics. The Advanced Progressive Density G-Zero technology brings together layers of special polyurethanes, exclusively developed for application in its composition, forming a structure with stages of different real densities, superior size and high resilience. Its organisation allows maximum comfort, balanced postural support and high durability. There are multiple layers of different compounds and thicknesses acting together to provide unprecedented softness and support, all to contribute to a serene and invigorating sleep.',
    features: [
      'Multi-zone density variation',
      'Adaptive pressure distribution',
      'Spinal alignment optimization',
      'Pressure point reduction',
      'Enhanced durability design',
    ],
    benefits: [
      'Optimum spinal alignment',
      'Reduced pressure points',
      'Enhanced comfort',
      'Better sleep quality',
      'Reduced morning stiffness',
    ],
    ratings: {
      relaxation: 5,
      recovery: 4,
      sleep: 5,
      energy: 3,
      pain: 4,
    },
    applications: [
      'Sleep Systems',
      'Ergonomic Cushions',
      'Therapeutic Mats',
      'Seating Solutions',
    ],
  },
  {
    id: 'relax-system',
    title: 'Relax System',
    subtitle: 'Comprehensive Wellness Integration',
    description:
      'RELAX SYSTEM is an electronic vibromassager that is attached inside Nipponflex sleeping systems. This technology offers a pleasant and relaxing electronic massage, with pulse vibrations and / or continuous waves, of low and high intensity and / or speed. The Relax System acts on 5 parts of the body and with 9 different massage modes, which are activated by control.',
    features: [
      'Multi-technology integration',
      'Comprehensive wellness approach',
      'Customizable therapy levels',
      'Full-body treatment capability',
      'Professional-grade effectiveness',
    ],
    benefits: [
      'Complete body relaxation',
      'Enhanced recovery',
      'Stress reduction',
      'Improved sleep quality',
      'Overall wellness enhancement',
    ],
    ratings: {
      relaxation: 5,
      recovery: 5,
      sleep: 4,
      energy: 4,
      pain: 4,
    },
    applications: [
      'Complete Wellness Systems',
      'Professional Therapy',
      'Home Spa Solutions',
      'Recovery Centers',
    ],
  },
  {
    id: 'progressive-density',
    title: 'Progressive Density',
    subtitle: 'Adaptive Support Technology',
    description:
      'The Progressive Density, used in Nipponflex Scientific Sleeping Systems, is composed of several layers of polyurethane with different real densities, in order to meet all biotypes.',
    features: [
      'Zone-specific density variation',
      'Body contour adaptation',
      'Structural integrity maintenance',
      'Long-term durability',
      'Customizable firmness levels',
    ],
    benefits: [
      'Personalised comfort',
      'Enhanced support',
      'Pressure relief',
      'Improved circulation',
      'Better rest quality',
    ],
    ratings: {
      relaxation: 4,
      recovery: 3,
      sleep: 4,
      energy: 2,
      pain: 3,
    },
    applications: [
      'Support Cushions',
      'Ergonomic Products',
      'Therapeutic Devices',
      'Comfort Solutions',
    ],
  },
  {
    id: 'isothermal-system',
    title: 'Isothermal System',
    subtitle: 'Temperature Regulation Technology',
    description:
      'The Isothermal System used in Nipponflex products has a rigid and ventilated base of expanded and highly resistant polystyrene, which supports the progressive density of the product.',
    features: [
      'Automatic temperature regulation',
      'Adaptive thermal response',
      'Energy-efficient operation',
      'Consistent temperature maintenance',
      'Environmental adaptation',
    ],
    benefits: [
      'Optimum thermal comfort',
      'Enhanced relaxation',
      'Improved therapy effectiveness',
      'Energy conservation',
      'Consistent performance',
    ],
    ratings: {
      relaxation: 5,
      recovery: 4,
      sleep: 4,
      energy: 3,
      pain: 3,
    },
    applications: [
      'Thermal Therapy Products',
      'Climate Control Systems',
      'Wellness Environments',
      'Temperature-Sensitive Applications',
    ],
  },
];

const researchMilestones: ResearchMilestone[] = [
  {
    title: 'Breakthrough Material Development',
    description:
      'Development of Rabatan® advanced material technology with enhanced therapeutic properties.',
  },
  {
    title: 'FIR Technology Advancement',
    description:
      'Creation of next-generation FIR Bioceramic® with improved efficiency and deeper penetration.',
  },
  {
    title: 'Magnetic Integration Innovation',
    description:
      'Successfully combining magnetic therapy with FIR technology for synergistic benefits.',
  },
  {
    title: 'Progressive Density Engineering',
    description:
      'Engineering G-Zero® technology for optimum pressure distribution and spinal alignment.',
  },
  {
    title: 'Comprehensive System Integration',
    description:
      'Development of integrated wellness systems combining multiple technologies seamlessly.',
  },
];

// Rating Stars Component
const RatingStars = defineComponent({
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
  template: `
    <div class="flex space-x-1">
      <svg 
        v-for="star in 5" 
        :key="star" 
        class="w-4 h-4"
        :class="star <= rating ? 'text-ecuador-yellow fill-current' : 'text-gray-300 fill-current'"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
  `,
});

// Animations
const animate = {
  float: {
    animation: 'float 6s ease-in-out infinite',
  },
};
</script>

<style scoped>
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Custom scrollbar for table */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #0033a0;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #002080;
}
</style>
