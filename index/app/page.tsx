"use client"

import React, { useState } from 'react';

const BlepharitisInfoPage = () => {
  const [referencesExpanded, setReferencesExpanded] = useState(false);

  const toggleReferences = () => {
    setReferencesExpanded(!referencesExpanded);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50" 
         style={{
           backgroundImage: 'radial-gradient(#4A90E2 0.5px, transparent 0.5px)',
           backgroundSize: '10px 10px',
           backgroundAttachment: 'fixed'
         }}>
      <div className="w-11/12 max-w-4xl bg-white border-2 border-gray-300 rounded-lg shadow-lg p-10 my-12">
        
        {/* Overview Section */}
        <div className="mb-10">
          <h3 className="text-gray-800 border-b-4 border-blue-500 pb-2 mt-8 mb-5 text-xl font-bold">
            Overview
          </h3>
          <p className="leading-relaxed text-gray-600 mb-4">
            It affects people of all ages. Although uncomfortable, blepharitis is{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              not contagious
            </span>{' '}
            and generally does not cause any{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              permanent damage to eyesight
            </span>
            . Blepharitis can't usually be cured, but the{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              symptoms can be controlled with good eyelid hygiene
            </span>
            . Blepharitis is a{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              long-term (chronic) condition
            </span>
            .
          </p>

          <p className="leading-relaxed text-gray-600 mb-4">
            Blepharitis can be classified according to anatomic location:{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              anterior blepharitis
            </span>{' '}
            affects the eyelid skin, base of the eyelashes and the eyelash follicles, and{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              posterior blepharitis
            </span>{' '}
            affects the meibomian glands and gland orifices. Blepharitis has traditionally been clinically subcategorized as{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              staphylococcal
            </span>
            ,{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              seborrheic
            </span>
            ,{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              meibomian gland dysfunction (MGD)
            </span>
            , or a combination thereof.
          </p>

          <p className="leading-relaxed text-gray-600 mb-4">
            There is considerable overlap of symptoms of all types of blepharitis. Blepharitis frequently leads to associated{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              ocular surface inflammation
            </span>
            , including{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              conjunctivitis
            </span>
            , functional tear deficiency, and keratitis. Blepharitis may also exacerbate symptoms of coexisting ocular surface disease, including allergy and aqueous tear deficiency. The chronic nature of blepharitis, the uncertain etiology, and the frequent coexistence of ocular surface disease make blepharitis difficult to manage. In cases where a{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              bacterial infection
            </span>{' '}
            is the cause,{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              medications
            </span>{' '}
            may be prescribed along with eyelid hygiene.{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Nutritional supplements
            </span>{' '}
            such as{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Omega 3
            </span>{' '}
            and{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              flaxseed oil
            </span>{' '}
            are also recommended.
          </p>
        </div>

        {/* Symptoms Card */}
        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-8 shadow-lg max-w-4xl mx-auto my-8">
          <h3 className="mb-6 text-xl text-gray-800 text-center border-b-4 border-blue-500 pb-2">
            Symptoms of Blepharitis
          </h3>
          <div className="flex items-start gap-4 flex-col md:flex-row">
            <ol className="flex-1 list-decimal list-inside space-y-4">
              <li className="text-gray-600 leading-tight">
                <span className="underline decoration-blue-500 decoration-2 text-gray-800">
                  Itchy, sore and red eyelids that stick together
                </span>
              </li>
              <li className="text-gray-600 leading-tight">
                <span className="underline decoration-blue-500 decoration-2 text-gray-800">
                  Crusty or greasy eyelashes
                </span>
              </li>
              <li className="text-gray-600 leading-tight">
                <span className="underline decoration-blue-500 decoration-2 text-gray-800">
                  A burning, gritty sensation in your eyes
                </span>
              </li>
              <li className="text-gray-600 leading-tight">
                <span className="underline decoration-blue-500 decoration-2 text-gray-800">
                  Increased sensitivity to light (photophobia)
                </span>
              </li>
              <li className="text-gray-600 leading-tight">
                <span className="underline decoration-blue-500 decoration-2 text-gray-800">
                  Swollen eyelid margins
                </span>
              </li>
              <li className="text-gray-600 leading-tight">
                <span className="underline decoration-blue-500 decoration-2 text-gray-800">
                  Finding contact lenses uncomfortable to wear
                </span>
              </li>
              <li className="text-gray-600 leading-tight">
                <span className="underline decoration-blue-500 decoration-2 text-gray-800">
                  Abnormal eyelash growth or loss of eyelashes in severe cases
                </span>
              </li>
              <li className="text-gray-600 leading-tight">
                <span className="underline decoration-blue-500 decoration-2 text-gray-800">
                  Both eyes usually affected (one may be worse), symptoms worse in the morning
                </span>
              </li>
            </ol>
            <div className="w-64 h-64 border-2 border-gray-300 bg-gray-50 flex-shrink-0 rounded-lg flex items-center justify-center text-gray-500 text-sm">
              Image Placeholder
            </div>
          </div>
        </div>

        <p className="leading-relaxed text-gray-600 mb-4">
          Staphylococcal blepharitis is characterized by{' '}
          <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
            scaling
          </span>
          ,{' '}
          <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
            crusting
          </span>
          , and{' '}
          <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
            erythema of the eyelid margin
          </span>{' '}
          with{' '}
          <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
            collarette formation
          </span>{' '}
          at the base of the cilia. Chronic inflammation may be punctuated by acute exacerbations that lead to the development of{' '}
          <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
            ulcerative blepharitis
          </span>
          . Loss of eyelashes and corneal involvement, including{' '}
          <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
            punctate epithelial erosions
          </span>
          ,{' '}
          <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
            marginal infiltrates
          </span>
          , and{' '}
          <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
            neovascularization
          </span>
          , may occur.
        </p>

        {/* Causes and Risks Section */}
        <div className="mb-10">
          <h3 className="text-gray-800 border-b-4 border-blue-500 pb-2 mt-8 mb-5 text-xl font-bold">
            Causes and Risks
          </h3>
          <h4 className="text-gray-800 border-b-2 border-blue-400 pb-2 mb-4 text-lg font-semibold">
            There are three main types of blepharitis:
          </h4>
          <div className="flex justify-center gap-5 flex-wrap my-5">
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-5 w-72 shadow-md text-left">
              <h4 className="mt-0 mb-4 text-lg text-gray-800 border-b-2 border-blue-500 pb-2">
                Anterior Blepharitis
              </h4>
              <p className="m-0 text-base text-gray-600">
                Inflammation affects the skin around the base of your eyelashes.
              </p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-5 w-72 shadow-md text-left">
              <h4 className="mt-0 mb-4 text-lg text-gray-800 border-b-2 border-blue-500 pb-2">
                Posterior Blepharitis
              </h4>
              <p className="m-0 text-base text-gray-600">
                Inflammation affects your Meibomian glands.
              </p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-5 w-72 shadow-md text-left">
              <h4 className="mt-0 mb-4 text-lg text-gray-800 border-b-2 border-blue-500 pb-2">
                Mixed Blepharitis
              </h4>
              <p className="m-0 text-base text-gray-600">
                A combination of both anterior and posterior blepharitis.
              </p>
            </div>
          </div>

          <p className="leading-relaxed text-gray-600 mb-4">
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Anterior blepharitis
            </span>{' '}
            can be caused by either a reaction to{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Staphylococcus bacteria
            </span>{' '}
            – these usually live harmlessly on the skin of many people, but for unknown reasons they can cause the eyelids to become inflamed, or{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              seborrhoeic dermatitis
            </span>{' '}
            – a skin condition that causes skin to become oily or flaky and sometimes irritate the eyelids, causing the{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Meibomian glands
            </span>{' '}
            to block.
          </p>

          <p className="leading-relaxed text-gray-600 mb-4">
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Posterior blepharitis
            </span>{' '}
            is caused by a problem with the{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Meibomian glands
            </span>
            , where the glands get blocked by either debris, skin flakes or inflammation. Sometimes blockages in the Meibomian glands are associated with a skin condition called{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              rosacea
            </span>
            . If too much oily substance is being produced, this may be caused by{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              seborrhoeic dermatitis
            </span>
            .
          </p>

          <p className="leading-relaxed text-gray-600 mb-4">
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Mixed blepharitis
            </span>
            , which is the most common, is caused by a combination of both anterior and posterior blepharitis.
          </p>

          <p className="leading-relaxed text-gray-600 mb-4">
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Blepharitis isn't contagious
            </span>
            .
          </p>
        </div>

        {/* Stats and Incidence Section */}
        <div className="mb-10">
          <h3 className="text-gray-800 border-b-4 border-blue-500 pb-2 mt-8 mb-5 text-xl font-bold">
            Stats and Incidence
          </h3>
          <div className="overflow-hidden">
            <div className="w-64 h-64 border-2 border-gray-300 bg-gray-50 float-right ml-5 mb-5 rounded-lg flex items-center justify-center text-gray-500 text-sm md:float-right md:ml-5 md:mb-5 block mx-auto mb-5 ml-0">
              Image Placeholder 2
            </div>

            <p className="leading-relaxed text-gray-600 mb-4">
              Although{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                blepharitis
              </span>{' '}
              is one of the most common ocular disorders, epidemiological information on its incidence or prevalence within defined populations is lacking. One single-center study of 90 patients with chronic blepharitis noted that the mean age of patients was{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                50 years
              </span>
              . Compared with patients with other forms of blepharitis, patients with{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                staphylococcal blepharitis
              </span>{' '}
              were found to be relatively younger ({' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                42 years old
              </span>
              ) and most were{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                female (80%)
              </span>
              . A survey of a representative sample of U.S. adults (n = 5000) revealed that typical symptoms associated with blepharitis are quite common, and that{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                younger people report more frequent symptoms
              </span>{' '}
              than older individuals. In another study in the same report,{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                ophthalmologists and optometrists reported blepharitis in 37% and 47% of their patients
              </span>
              , respectively.
            </p>

            <p className="leading-relaxed text-gray-600 mb-4">
              According to statistical data,{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                Chronic Blepharitis has the highest incidence of eye diseases
              </span>
              . In a survey conducted in the United States (USA),{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                37% to 47% of patients
              </span>{' '}
              seen by respondents were diagnosed with blepharitis. In 2014,{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                blepharitis accounted for 700,000 patient visits
              </span>{' '}
              in the USA. In the past, there has been considerable confusion over the pathophysiology, and thus the definition of blepharitis. Because of these uncertainties, an{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                accurate assessment of prevalence and incidence
              </span>{' '}
              has been difficult. The objective of this study was to review the literature to present information on the incidence and prevalence of chronic blepharitis worldwide, and to identify the best medical treatments and interventions. Based on the literature review, there are still{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                information gaps regarding the best treatment for chronic blepharitis
              </span>{' '}
              and dysfunction of Meibomian gland (DMG).
            </p>

            <p className="leading-relaxed text-gray-600 mb-4">
              In conclusion, it is imperative to create{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                multi-centre randomized studies
              </span>{' '}
              to better understand{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                the best treatment
              </span>{' '}
              for these diseases in order to ensure{' '}
              <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
                improved quality of life
              </span>{' '}
              throughout the entire treatment.
            </p>
          </div>
        </div>

        {/* Treatment Section */}
        <div className="mb-10">
          <h3 className="text-gray-800 border-b-4 border-blue-500 pb-2 mt-8 mb-5 text-xl font-bold">
            Treatment
          </h3>
          <p className="leading-relaxed text-gray-600 mb-4">
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              Blepharitis is usually a long-term condition
            </span>
            . Most people experience{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              repeated episodes
            </span>
            , separated by periods without symptoms. It{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              can't usually be cured
            </span>
            , but a{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              daily eyelid-cleaning routine
            </span>{' '}
            can help{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              control symptoms
            </span>{' '}
            and{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              prevent permanent scarring
            </span>{' '}
            of the eyelid margins.
          </p>

          <div className="flex justify-center gap-5 flex-wrap my-5">
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-5 w-72 shadow-md text-left">
              <h4 className="mt-0 mb-4 text-lg text-gray-800 border-b-2 border-blue-500 pb-2">
                Using a warm compress
              </h4>
              <p className="m-0 text-base text-gray-600">
                To make the oil produced by the glands around your eyes more runny
              </p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-5 w-72 shadow-md text-left">
              <h4 className="mt-0 mb-4 text-lg text-gray-800 border-b-2 border-blue-500 pb-2">
                Gently massaging your eyelids
              </h4>
              <p className="m-0 text-base text-gray-600">
                To push the oils out of the glands
              </p>
            </div>
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-5 w-72 shadow-md text-left">
              <h4 className="mt-0 mb-4 text-lg text-gray-800 border-b-2 border-blue-500 pb-2">
                Cleaning your eyelids
              </h4>
              <p className="m-0 text-base text-gray-600">
                To wipe away any excess oil and remove any crusts, bacteria, dust or grime that might have built up
              </p>
            </div>
          </div>

          <p className="leading-relaxed text-gray-600 mb-4">
            More severe cases may require{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              antibiotics
            </span>{' '}
            that are either{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              applied directly to the eye/eyelid
            </span>{' '}
            or{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              taken as tablets
            </span>
            .
          </p>

          <p className="leading-relaxed text-gray-600 mb-4">
            For{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              posterior blepharitis
            </span>
            , long-term oral{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              tetracycline, minocycline, or doxycycline
            </span>{' '}
            is more effective than topical antibiotics, especially for patients with{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              rosacea
            </span>
            . As little as{' '}
            <span className="font-bold bg-gradient-to-r from-blue-100 to-blue-200 px-2 py-1 rounded text-gray-800">
              one pill twice a week
            </span>{' '}
            can maintain a relatively good therapeutic dose for long periods.
          </p>
        </div>

        {/* References Section */}
        <div className="mb-10">
          <h3 className="text-gray-800 border-b-4 border-blue-500 pb-2 mt-8 mb-5 text-xl font-bold flex items-center">
            References{' '}
            <span 
              className="cursor-pointer inline-block ml-2 transition-transform duration-300 ease-in-out text-blue-500 font-bold hover:text-blue-400"
              onClick={toggleReferences}
              style={{
                transform: referencesExpanded ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            >
              &gt;
            </span>
          </h3>
          {referencesExpanded && (
            <ol className="list-decimal list-inside mt-4 space-y-2">
              <li className="text-gray-600 leading-relaxed">
                <span className="underline decoration-blue-500">
                  <a href="https://www.aoa.org/Blepharitis.xml" className="text-blue-500 hover:text-blue-400 no-underline">
                    Blepharitis - American Optometric Association
                  </a>
                </span>
              </li>
              <li className="text-gray-600 leading-relaxed">
                <span className="underline decoration-blue-500">
                  <a href="https://www.nhs.uk/conditions/Blepharitis/Pages/Introduction.aspx" className="text-blue-500 hover:text-blue-400 no-underline">
                    Blepharitis - NHS Choices
                  </a>
                </span>
              </li>
              <li className="text-gray-600 leading-relaxed">
                <span className="underline decoration-blue-500">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/19383269/" className="text-blue-500 hover:text-blue-400 no-underline">
                    Department of Ophthalmology, George Washington University School of Medicine, Washington, DC, USA
                  </a>
                </span>
              </li>
              <li className="text-gray-600 leading-relaxed">
                <span className="underline decoration-blue-500">
                  <a href="https://www.aao.org/eyenet/article/managing-blepharitis-tried-true-new-approaches" className="text-blue-500 hover:text-blue-400 no-underline">
                    Managing Blepharitis: Tried-and-True and New Approaches
                  </a>
                </span>
              </li>
              <li className="text-gray-600 leading-relaxed">
                <span className="underline decoration-blue-500">
                  <a href="https://www.journalijdr.com/chronic-blepharitis-review-incidence-prevalence-and-treatments" className="text-blue-500 hover:text-blue-400 no-underline">
                    International Journal of Development Research
                  </a>
                </span>
              </li>
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlepharitisInfoPage;