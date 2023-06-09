import React from "react";
import Footer from "../../components/Footer/Footer";
import MainNavbar from "../../components/Navbar/MainNavbar";
import Spacer from "../../components/Spacer/Spacer";
import styles from "./termsandconditions.module.scss";
import Image from "next/image";
const TermsAndConditions = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.pageHead}>Terms and Conditions</h1>
        <p className="primaryText">
          The "Terms and Conditions" govern your use of the Site,
          FiveCornersRx.com, which is owned and operated by FiveCornersRx, LLC,
          referred to as "FiveCornersRx," "we," "our," or "us." The Agreement
          comprises these Terms and Conditions, the Privacy Policy, the Consent
          to Telehealth, the FAQ, and all other applicable rules, policies,
          schedules, and terms and conditions or documents published from time
          to time.
        </p>
        <p className="primaryText">
          By accessing or using the Site, you agree to the entire Agreement.
          Your compliance with these Terms and Conditions grants you a personal,
          limited, revocable, non-exclusive, and non-transferable right to use
          the Site and Services for personal and non-commercial use within the
          United States, as permitted under this Agreement, the Consent to
          Telehealth, and the Privacy Policy.
        </p>
        <p className="primaryText">
          Your use of the Site or any of its Content, including Informational
          Content or Third-Party Links, Interactive Services, registering for
          the FiveCornersRx Newsletter, purchasing FiveCornersRx Products,
          purchasing Prescription Medications through Telemedicine Services, or
          utilizing the Contact Services, is subject to the entire Agreement.
        </p>
        <p className="primaryText">
          Third-Party Links may not be under our control; therefore, we are not
          responsible for the information, products or services described
          thereon, or for the content of any Third-Party Links, including,
          without limitation, any link contained in a Third-Party Link, or any
          changes or updates to a Third-Party Link. We are providing these
          Third-Party Links to you only as a convenience, and the inclusion of
          any Third-Party Link does not necessarily imply endorsement of its
          content or any association with its operators. Your use of these
          Third-Party Links is at your own risk, and we are not liable to you in
          any way, either directly or indirectly, for any content, errors,
          damage or loss caused by or in connection with use of or reliance on
          information contained in or provided to or provided by Third-Party
          Links.
        </p>
        <p className="primaryText">
          Third-Party Links are not under our control, and we do not assume
          responsibility for their content or any updates made to them. We
          provide Third-Party Links for convenience and do not endorse them.
          Your use of Third-Party Links is at your own risk, and we are not
          liable for any content, errors, damage, or loss arising from or
          related to use or reliance on information from Third-Party Links.
        </p>
        <p className="primaryText">
          It is essential to review the Agreement carefully. If you do not agree
          to the entire Agreement, you are not authorized to use the Site
          Offerings. If you are a New Jersey resident, we encourage you to
          review your rights under the New Jersey Truth-in-Consumer Contract
          Warranty and Notice Act ("TCCWNA").
        </p>
        <h3>Agreement and Disclaimers</h3>
        <p className="primaryText">
          Your use of the site implies that you accept that it is solely at your
          own risk. You acknowledge that the Content and FiveCornersRx Products
          have not been evaluated by the US Food & Drug Administration (“FDA”).
          The Site Offerings, including the Content, FiveCornersRx Products, and
          other materials, are not intended to diagnose, treat, cure, or prevent
          any medical condition or disease, and should not be used as medical
          advice or a substitute for it. It is recommended that you seek your
          physician's guidance and care when using these products.
        </p>
        <p className="primaryText">
          Furthermore, it is important to note that the FiveCornersRx Products
          and Prescription Medications are not intended for use by individuals
          under eighteen (18) years of age. It is also important to understand
          that some of the Content associated with the FiveCornersRx Products
          and their effectiveness comes from independent third-party sources,
          such as news agencies, scientific reports, and scientific/research
          entities. FiveCornersRx cannot guarantee that this Content is
          error-free, and does not endorse any Third-Party Sources or their
          methods.
        </p>
        <p className="primaryText">
          All FiveCornersRx Product specifications, performance data, and
          related information available through the Site Offerings are for
          informational and illustrative purposes only. They do not guarantee
          that the FiveCornersRx Products will conform to these specifications
          or performance data, or that they will provide you with any particular
          benefits or match the results of others who have used them. Individual
          results may vary from person to person and depend on factors such as
          pre-existing medical conditions, age, weight, body chemistry, diet,
          and exercise regimen
        </p>
        <p className="primaryText">
          It is important to always consult your physician or other healthcare
          professional before utilizing any FiveCornersRx Products, Prescription
          Medications, or adopting any treatment for a health problem,
          especially if you have medical conditions such as strokes, high blood
          pressure, heart, liver, kidney, or thyroid disease, diabetes, skin
          diseases or ailments, anemia, depression, anxiety, or a family history
          of these or other mental or physical illnesses. Your physician should
          allow for proper follow-up visits and individualize your treatment
          plan as appropriate. If you have or suspect that you have a medical
          problem as a result of using any FiveCornersRx Products, Prescription
          Medications, or treatment for a health problem, promptly contact your
          health care provider. It is important to never disregard professional
          medical advice or delay in seeking professional advice because of
          something that you have read on the Site or in connection with any
          other Site Offerings.
        </p>
        <p className="primaryText">
          In case you are currently on medication or receiving treatment for any
          illness, or if you are pregnant or nursing, or have any allergies to
          certain components, it is important that you consult with a healthcare
          professional or physician before using any products from
          FiveCornersRx, taking Prescription Medications, or trying any therapy
          for any health issue. It is recommended that you always verify the
          ingredients in all FiveCornersRx Products and Prescription Medications
          to prevent possible allergic reactions. If you feel that you are
          having an allergic reaction or any other negative health condition, it
          is crucial that you immediately get in touch with your healthcare
          provider.
        </p>
        <ul>
          <li>
            {" "}
            The scope of this Agreement pertains to the use of Site Offerings
            and supersedes all previous or current agreements, representations,
            warranties, and understandings between users and FiveCornersRx.
            FiveCornersRx reserves the right to modify the Agreement at any time
            without specific notice to users. However, any changes to the
            Dispute Resolution Provisions or Billing Provisions will not apply
            to any disputes or charges incurred prior to the modification. The
            latest version of the Agreement will be available on the Site, and
            it is recommended that users read it every time they use the
            website. Users who disagree with any modifications can only stop
            using the website and its services. Continuing to access and use the
            Websites or Services implies acknowledgment and acceptance of any
            modifications made to the Agreement, except for disputes or charges
            incurred before the changes in the Dispute Resolution Provisions or
            Billing Provisions.
          </li>
          <li>
            {" "}
            Only individuals who are 18 years or older, located in a State of
            the United States where FiveCornersRx operates, and agree to be
            legally bound by and comply with the Terms as posted can access the
            Site Offerings. Users must have compatible computing and/or mobile
            devices, internet access, and necessary software to use the
            Platform. Any charges or fees incurred by the user's mobile service
            or Internet Service Provider related to their use of the Services
            are their sole responsibility. However, fulfilling these
            requirements does not guarantee access to the Site Offerings.
            FiveCornersRx has the right to terminate users' access to the Site
            Offerings at any time if they breach the Agreement, engage in
            improper conduct related to the Site Offerings, or perform
            unauthorized commercial activity by or through the Site Offerings.{" "}
          </li>
          <li>
            {" "}
            Users can register to purchase Products and/or use certain Site
            Offerings, such as Contact Services. To register, users must provide
            accurate and complete registration information and promptly inform
            FiveCornersRx of any changes. Failing to do so gives FiveCornersRx
            the right to immediately terminate the use of certain Site Offerings
            that require registration. The information provided during the
            registration process will be handled in accordance with
            FiveCornersRx's privacy policy.
          </li>
          <li>
            {" "}
            The purchase process: The acquisition of FiveCornersRx Products or
            Prescription Medications can be carried out by users completing the
            relevant Form and providing the necessary Registration Data. To
            obtain Prescription Medication, users must also complete the
            Telemedicine Services process and receive approval from a Healthcare
            Provider. Two options are available to users for purchasing Products
            on the site: (a) the Automatic Renewal Program option, under which
            the Payment Method will be charged the applicable amount for the
            relevant Products on a recurring basis as long as the Automatic
            Renewal Program subscription remains active. Users can cancel a
            subscription at any time up to forty-eight (48) hours before the
            applicable renewal processing date. (b) the One-Time Purchase
            option, under which the Payment Method provided on the Form will be
            charged the amount listed on the Site for the relevant Product(s),
            plus shipping and handling, and any applicable sales tax. If the
            Payment Method is cancelled or no longer valid, users must inform
            FiveCornersRx immediately, or the shipment of the Product may be
            delayed or cancelled.
          </li>
          <li>
            {" "}
            Products: The Products offered by FiveCornersRx are subject to the
            disclaimers stated on the Site and contained in these terms and
            conditions. The prices for the Products may change at any time, and
            FiveCornersRx reserves the right to reject any part of an order
            without prior notice. All Products are subject to availability, and
            if any Products in an order are no longer available or if all or
            part of the order is cancelled, the user will be notified. In such
            cases, FiveCornersRx will refund any amount already paid for the
            ordered Products that are no longer available or any cancelled part
            of any order.
          </li>
          <li>
            {" "}
            Return and Refund Policy: Users can return FiveCornersRx Products by
            contacting a customer care professional at Phone1. However,
            Prescription Medications cannot be returned or refunded.
          </li>
          <li>
            {" "}
            Telemedicine Services: The use of electronic communications,
            information technology or other means to deliver health care
            services between a healthcare provider and a patient who are not in
            the same location is referred to as Telemedicine. Telemedicine can
            be used for diagnosis, treatment, follow-up, and/or related patient
            education. It may involve electronic transmission of medical
            records, photo images, personal health information or other data,
            interactions between a patient and healthcare provider via audio,
            video, and/or data communications, and the use of output data from
            medical devices, sound, and video files. When you request
            Prescription Medication, you must complete the medical intake Form.
            FiveCornersRx will submit the form to a participating Healthcare
            Provider who will perform the requisite Telemedicine Services to
            determine your suitability for Prescription Medication before
            prescribing it. Please note that FiveCornersRx does not provide the
            Telemedicine Services that are made available through the Site
            Offerings, nor can FiveCornersRx issue a prescription for the
            Prescription Medication. The ultimate terms and conditions of any
            such prescription made available through the Telemedicine Services
            will be determined by the applicable Healthcare Provider(s). You
            understand and agree that FiveCornersRx shall not be liable to you
            or any third party for any medical services and/or medications
            offered by any Healthcare Provider(s) through the Telemedicine
            Services. Refer to our Consent to Telehealth for a description of
            the risks and benefits of telemedicine. The Consent to Telehealth is
            incorporated into these Terms of Use by reference and is a part of
            these Terms of Use. Always consult with your physician or other
            healthcare professional before utilizing any Prescription
            Medications and/or adopting any treatment for a health problem
            recommended by and through the Telemedicine Services. Your physician
            should allow for proper follow-up visits and individualize your
            treatment plan as appropriate. Never disregard professional medical
            advice or delay in seeking professional advice because of something
            that you have read on the Site or in connection with any
            Telemedicine Services.
          </li>
          <li>
            Content: The Site contains Content, including but not limited to
            product reviews, text, audio, video, photographs, graphics, artwork,
            testimonials, and other information about FiveCornersRx and/or the
            FiveCornersRx Products. The Content is compiled, distributed, and
            displayed by FiveCornersRx and Third-Party Providers. FiveCornersRx
            does not control and is not responsible for the completeness,
            accuracy, appropriateness, and/or usefulness of the Content provided
            by Third-Party Providers that is made available through the Site
            Offerings. Reliance on any Content or other information made
            available to you through the Site Offerings is solely at your own
            risk. You should not necessarily rely on such Third-Party Content.
            FiveCornersRx does not represent or warrant that the Content and
            other information posted through the Site Offerings is accurate,
            complete, up-to-date, or appropriate. You understand and agree that
            FiveCornersRx will not be responsible for and undertakes no
            responsibility to monitor or otherwise police Content provided by
            Third-Party Providers. The Content provided may be outdated,
            harmful, inaccurate, or deceptive. Please exercise caution, use
            common sense, and prioritize safety when using the Content. By using
            the Content, you acknowledge that FiveCornersRx has no obligation
            and assumes no liability to you. The Content is offered solely for
            informational purposes and is always subject to the disclaimers
            present on the Site and contained herein.
          </li>
          <li>
            Submission of User Content and License Restrictions: By utilizing
            the Interactive Services, you have the ability to submit User
            Content, such as textual, audio, and/or visual content, feedback
            related to the Services, vehicle repair quote requests, and
            competition entries, to FiveCornersRx. While you retain ownership of
            the User Content provided, submitting it to FiveCornersRx grants the
            company a worldwide, perpetual, irrevocable, transferrable,
            royalty-free license to use, copy, modify, create derivative works
            of, distribute, publicly display, publicly perform, and otherwise
            exploit the User Content in any manner, including on third-party
            sites and services. You are responsible for ensuring that you own or
            have obtained the necessary licenses and permissions for providing
            the User Content, and that it does not infringe on any third party's
            intellectual property or proprietary rights or violate any
            applicable law or regulation. FiveCornersRx reserves the right to
            review, monitor, or remove User Content at any time and for any
            reason, and may suspend or terminate a user's access and/or account
            for violating these terms.
          </li>
          <li>
            Protection of Health Information: Upon creating an account with
            FiveCornersRx, you may provide personal information that is not
            considered "protected health information" or "medical information."
            However, if you request Prescription Medications or certain
            FiveCornersRx Products, you may provide health or medical
            information that may be protected under applicable laws like HIPAA.
            Although FiveCornersRx is not classified as a "covered entity" under
            HIPAA, it may act as a "business associate" of Healthcare Providers
            and be subject to certain provisions of HIPAA regarding "protected
            health information" that you provide to the Healthcare Providers.
            Any medical or health information that is subject to specific
            protections under applicable state laws will be used and disclosed
            only in accordance with such laws. Protected Information does not
            include information that has been de-identified in accordance with
            applicable laws.
          </li>
          <li>
            Representations and Warranties: The user makes several
            representations and warranties to FiveCornersRx. These include that
            all information provided in connection with the use of the Site
            Offerings and in communications with Healthcare Providers is true,
            accurate, current, and complete, and that the user agrees to
            maintain and update such information. Additionally, the user
            acknowledges that the Products are for personal use only and not for
            reselling, that the Agreement is legally binding and enforceable,
            that the user has independently evaluated the desirability of
            utilizing the Site Offerings, and that the execution, delivery, and
            performance of the Agreement by the user will not conflict with or
            violate any applicable law, order, judgment, decree, agreement, or
            other instrument.
          </li>
          <li>
            Indemnification: The user agrees to indemnify, hold harmless, and
            defend FiveCornersRx and its shareholders, directors, officers,
            employees, and agents from any action, cause, claim, damage, debt,
            demand, or liability arising out of or relating to various issues.
            These include the user's breach of this Agreement, the user's use of
            the Site Offerings, including any data or work transmitted or
            received by the user, the user's dispute with any Healthcare
            Provider(s) and/or other third party(ies), or any unacceptable,
            unauthorized, or improper use of the Site Offerings. These
            provisions benefit FiveCornersRx, its parent, subsidiaries, and
            affiliates, and each of their respective officers, directors,
            members, employees, agents, shareholders, licensors, suppliers, and
            attorneys, who may enforce these provisions directly against the
            user.
          </li>
          <li>
            The Site Offerings, including Proprietary Content such as
            information, graphics, design, compilation, software, documentation,
            marks, business processes, and service names, are the exclusive
            right, title, and interest of FiveCornersRx. Any use of a trademark
            without FiveCornersRx's express written consent is strictly
            prohibited. Users are prohibited from copying, recompiling,
            disassembling, reverse engineering, making or distributing any other
            form of, or creating derivative works from, the Proprietary Content
            without prior written consent. All Proprietary Content is protected
            under United States and foreign laws.
          </li>
          <li>
            By accessing and using the Site Offerings, users agree to use
            caution and good judgment and are not allowed to attempt to
            interfere with the operation of the Site Offerings in any way,
            including but not limited to damaging, destroying, tampering, or
            vandalizing. Such attempts will be considered a violation of
            criminal and civil law, and FiveCornersRx will pursue all remedies
            against the individual or entity involved to the fullest extent
            permitted by law and equity.
          </li>
          <li>
            The Site Offerings and other products and services available through
            the same are provided to users on an "as is" and "as available"
            basis. Accessing and using the Site Offerings is voluntary and
            entirely at the user's risk. FiveCornersRx, as well as any
            third-party offering products or services through the Site
            Offerings, make no representations or warranties of any kind,
            whether express or implied, statutory or otherwise, related to this
            Agreement, the Site Offerings, the products and services offered
            through the same, or any other matter. This includes, but is not
            limited to, all warranties of merchantability, title, and fitness
            for a specific purpose. FiveCornersRx does not guarantee or warrant
            that using the Site Offerings will lead to any medical benefit or
            other health-related outcome. Additionally, FiveCornersRx does not
            guarantee or warrant that the Site Offerings and other products and
            services will be free of errors, disruptions, delays, defects,
            interferences, imperfections, cyber attacks, malware, or any other
            adverse incidents. Any advice or information obtained by users from
            FiveCornersRx or the Site Offerings, whether orally or in writing,
            will not create any warranty not expressly stated in this Agreement.
          </li>
          <li>
            Limitation of Liability: The use of the Site Offerings by any User
            implies the acceptance that FiveCornersRx will not be held
            accountable for any direct, indirect, incidental, special,
            consequential, and/or exemplary damages, including but not limited
            to loss of profits, goodwill, use, data, or other intangible losses.
            This applies to any causes of action, in the aggregate, including
            but not limited to breach of contract, breach of warranty,
            negligence, strict liability, misrepresentation, and any and all
            other torts. Furthermore, FiveCornersRx will not be held responsible
            for any obligations, liabilities, or claims in excess of the
            limitations stated in this section. In the event of any loss, cost,
            damage, liability, or expense (including attorneys' fees and costs)
            under any theory of liability, in contract, tort (including, but not
            limited to, negligence), or otherwise, the total liability of
            FiveCornersRx to any User shall not exceed the lesser of the amount
            paid by the User, if any, for the right to access or participate in
            any activity related to the Site Offerings, or five hundred dollars
            ($500.00). Any claims that arise from the use of the Site Offerings
            and the other products and services offered by and through the Site
            must be brought by any User or FiveCornersRx within one (1) year of
            the date of the event that gave rise to the cause of action. It is
            important to note that the negation of damages set forth above is a
            fundamental element of the basis of the bargain between each User
            and FiveCornersRx. Access to the Site Offerings would not be
            provided to Users without such limitations. Each User expressly
            acknowledges and agrees that this limitation of liability applies to
            all Site Offerings and products and services offered by and through
            FiveCornersRx, and any third-party offering products or services
            through the service. It is important to note that some jurisdictions
            do not allow certain limitations on liability, and in such
            jurisdictions, the liability of FiveCornersRx shall be limited to
            the maximum extent permitted by law.
          </li>
          <li>
            To ensure compliance with copyright law, FiveCornersRx will
            terminate a user's account or remove any infringing content or
            material from the Site. As an Internet service provider,
            FiveCornersRx follows the Digital Millennium Copyright Act ("DMCA")
            and responds to clear notices of alleged copyright infringement. To
            file a notification of alleged copyright infringement with
            FiveCornersRx, please follow the procedure outlined in this Section.
            If you object to copyrighted material available on the Site, you may
            submit a notification to our Designated Agent. Your notification
            under 17 U.S.C. § 512(c) alleging copyright infringement must
            contain the following information: (a) the signature of the
            authorized person acting on behalf of the owner of the copyrighted
            work; (b) an identification and location of the copyrighted work
            that you claim has been infringed upon; (c) a written statement by
            you that you have a good faith belief that the disputed use is not
            authorized by the owner, its agent, or the law; (d) your contact
            information, such as telephone number or e-mail address; and (e) a
            statement by you that the above information in your notice is
            accurate and, under penalty of perjury, that you are the copyright
            owner or authorized to act on the copyright owner’s behalf. Contact
            us at for information or notice of claims.
          </li>
          <li>
            FiveCornersRx has the authority to edit and/or delete any documents,
            information, or content appearing on the Site at its sole
            discretion.
          </li>
          <li>
            All material submitted by users through or in association with the
            Site Offerings, including the Registration Data, is subject to the
            Privacy Policy.
          </li>
          <li>
            The Agreement shall be interpreted and governed by the laws of the
            State of New York without regard to conflict of law principles. It
            shall be considered as if it were executed and performed in New
            York, NY.
          </li>
          <li>
            Dispute Resolution and Arbitration: In the event of any claims
            arising under the Agreement, the parties agree to resolve the
            dispute through arbitration. If a dispute arises between the
            parties, including the Covered Parties, regarding any matter
            concerning the Site Offerings, the Agreement, or the breach of the
            Agreement by any party, the parties shall submit the dispute for
            resolution by arbitration before the American Arbitration
            Association ("AAA") in New York, NY, following the current
            Commercial Arbitration rules of the AAA. Prior to initiating formal
            dispute proceedings, you must submit a written description of the
            dispute, including all relevant documents and information, and the
            proposed resolution. You may send the written description of the
            dispute by US Mail to FiveCornersRx, Attention: Customer Service
            Department – 1940 Palmer Ave, Larchmont NY, 10538. FiveCornersRx
            shall contact you by letter at the billing address or e-mail address
            you provided. The parties shall negotiate in good faith to resolve
            the problem or dispute. If a Final Settlement Offer is provided and
            not accepted, or the dispute is not otherwise resolved
            satisfactorily, notice may be given to proceed to arbitration and
            commence arbitration proceedings with the AAA in your county of
            residence. For claims of Ten Thousand Dollars ($10,000.00) or less,
            the arbitration may proceed in person, by telephone, or based on
            submissions. If the arbitrator awards relief greater than the Final
            Settlement Offer, all filing, administration, and arbitrator fees
            associated with the arbitration shall be paid by the parties. If you
            retain an attorney for the arbitration, reasonable attorneys' fees
            shall be reimbursed by FiveCornersRx. The award shall be final and
            conclusive, and a judgment may be entered in any court of competent
            jurisdiction. FiveCornersRx shall not seek an award of attorneys'
            fees and expenses unless the arbitrator determines your claim was
            frivolous.
          </li>
          <Spacer />
          <p className={styles.innerPara}>
            You agree not to bring, join, or participate in any class action
            lawsuit for any claim, dispute, or controversy against the Covered
            Parties, their respective employees, officers, directors, members,
            representatives, or assigns, to the extent permitted by law.
            Injunctive relief may be sought to stop such a lawsuit or remove you
            as a participant, and you agree to pay the attorney's fees and court
            costs incurred by any Covered Party. This provision does not waive
            any of your rights or remedies to pursue a claim individually in
            binding arbitration or constitute an agreement. You may opt-out of
            these dispute resolution provisions by providing written notice of
            your decision within thirty (30) days of your first access to the
            Site.
          </p>
          <p className={styles.innerPara}>
            You expressly agree that use of the site is solely at your sole
            risk. You acknowledge and understand that the Content and Five
            Corners RX LLC Products have not been evaluated by the US Food &
            Drug Administration (“FDA”). The Content, Five Corners RX LLC
            Products and other material made available by and through the Site
            Offerings: (a) are not intended to diagnose, treat, cure or prevent
            any medical condition or disease; (b) are not in any way intended as
            medical advice or as a substitute for medical advice and/or medical
            treatment; and (c) should only be used in conjunction with the
            guidance and care of your physician. You further understand that the
            Five Corners RX LLC Products and Prescription Medications are not
            intended for use by persons under eighteen (18) years of age. You
            understand and agree that some of the Content associated with the
            Five Corners RX LLC Products and/or the efficacy of the Five Corners
            RX LLC Products, is obtained from independent third-party sources,
            such as news agencies, scientific reports and/or scientific/research
            entities (collectively, “Third-Party Sources”). Five Corners RX LLC
            does not warrant or represent that such Content is error-free, and
            Five Corners RX LLC does not represent or endorse any Third-Party
            Sources or the methods that they use to arrive at their conclusions.
            All Five Corners RX LLC Product specifications, performance data and
            other related information made available via the Site Offerings is
            for informational and illustrative purposes only, and do not
            constitute a guarantee or representation that the Five Corners RX
            LLC Products will conform to such specifications or performance
            data. Five Corners RX LLC does not warrant or represent that the
            Five Corners RX LLC Products will provide you with any particular
            benefits, or that your results will match those of others who have
            used the Five Corners RX LLC Products. Individual results will vary
            from person to person, and are dependent on factors including
            pre-existing medical conditions, age, weight, body chemistry, diet
            and exercise regimen.
          </p>

          <li>
            The California Department of Consumer Affairs provides California
            State resident Users with the ability to file grievances and
            complaints. Complaints can be made by phone at 916-445-1254 or
            800-952-5210, or by email to dca@dca.ca.gov. Complaints are subject
            to Cal. Civ. Code Sec. 1789.3.
          </li>
          <li>
            Proposition 65 is a California law enacted in 1986 that requires
            products that may expose California consumers to chemicals known to
            cause cancer or reproductive toxicity to carry warnings. The
            California Office of Environmental Health Hazard Assessment
            maintains a list of more than 850 chemicals that require warnings.
            Under new regulations adopted in August 2016, effective on August
            30, 2018, the information required in warnings has changed. Products
            associated with this page may contain Bisphenol A (BPA), a chemical
            known to harm the female reproductive system. Jar lids and bottle
            caps may also contain BPA. A warning has been included for these
            products. For more information, visit www.P65Warnings.ca.gov/BPA. To
            learn more about Proposition 65 and its regulations, visit
            https://oehha.ca.gov/proposition-65/law/proposition-65-law-and-regulations.
            Details on the new warnings can be found at
            https://www.p65warnings.ca.gov/new-proposition-65-warnings.
          </li>
          <li>
            If anything associated with the Site Offerings conflicts with the
            Agreement or is inconsistent with it, the Agreement shall take
            precedence. The failure of FiveCornersRx to enforce any provision of
            the Agreement shall not be construed as a waiver of that provision
            or the right to enforce it.
          </li>
          <li>
            This Agreement does not create an agency or partnership relationship
            between the parties, nor does it give either party the authority to
            bind the other.
          </li>
          <li>
            FiveCornersRx has the right to assign its rights and obligations
            under the Agreement, wholly or partly, to any party without prior
            notice to the user. The Agreement is non-assignable, and the user
            may not delegate their duties under it.
          </li>
          <li>
            If any provision of this Agreement is deemed void and unenforceable
            by a court of competent jurisdiction, such provision shall be
            modified to be enforceable or, if modification is not possible,
            eliminated from this Agreement. The remaining provisions shall
            remain in full force and effect.
          </li>
          <li>
            To obtain information about the Agreement, Site Offerings, or
            FiveCornersRx's practices, please use the appropriate contact method
            specified on the "Contact Us" page of the Site. Additionally, you
            can contact us by emailing support@FiveCornersRx.com, calling us at
            1-888-803-3039, or sending us U.S. mail to FiveCornersRx LLC (d/b/a
            FiveCornersRx LLC), 1940 Palmer Ave, Larchmont NY, 10538.
          </li>
          <li>
            Doctor and Pharmacy Information. <br />
            <br />
            Marc Serota, M.D; CEO MD Integrations; Board certified: Dermatology,
            Allergy/Immunology, Pediatrics; 816-679-2211 (Cell);
            mj.serota@gmail.com (Email). <br />
            <br />
            Cole Maudlin, Chief Executive Officer; GenRx Pharmacy; 17250 N
            Hartford Dr Ste 115, Scottsdale, AZ 85255; d.maduri@gogomeds.com
            (email); 1-866-453-6143 (office) <br />
            <br />
            Our Clinicians <br />
            <br />
            Alabama - AL DO.2327 12/31/2023
            <br />
            Alaska - AK 160520 12/31/2024
            <br />
            Arizona - AZ 8699 12/31/2024
            <br />
            Arkansas - AR E-13340 10/31/2023
            <br />
            California - CA 18058 10/31/2023
            <br />
            Colorado - CO DR.0063114 4/30/2023
            <br />
            Connecticut - CT 66855 10/31/2023
            <br />
            Delaware - DE C2-0023917 3/31/2023
            <br />
            Florida - FL OS12612 3/31/2024
            <br />
            Georgia - GA 78730 10/31/2024
            <br />
            Hawaii - HI DOS-2214 6/30/2024
            <br />
            Idaho - ID O-1465 6/30/2024
            <br />
            Illinois - IL 36.148872 7/31/2023
            <br />
            Indiana - IN 02006145A 10/31/2023
            <br />
            Iowa - IA DO-05075 10/1/2024
            <br />
            Kansas - KS 05-43760 10/31/2023
            <br />
            Kentucky - KY 4809 2/28/2023
            <br />
            Louisiana - LA 324077 10/31/2023
            <br />
            Maine - ME DO3113 10/31/2024
            <br />
            Maryland - MD H0088559 9/30/2023
            <br />
            Massachusetts - MA 285750 10/20/2024
            <br />
            Michigan - MI 5101025238 10/1/2025
            <br />
            Minnesota - MN TM 2634 12/31/2023
            <br />
            Mississippi - MS 29513 6/30/2023
            <br />
            Missouri - MO 2020022922 1/31/2024
            <br />
            Montana - MT MED-PHYS-LIC-100712 3/31/2023
            <br />
            Nebraska - NE 2238 10/1/2024
            <br />
            Nevada - NV DO3035 12/31/2023
            <br />
            New Hampshire - NH 22026 6/30/2023
            <br />
            <br />
            New Jersey - NJ 25MB10941200 6/30/2023
            <br />
            New Mexico - NM TM2022-0975 7/1/2025
            <br />
            New York - NY 297988 9/30/2024
            <br />
            North Carolina - NC 2019-02671 10/20/2023
            <br />
            North Dakota - ND 17208 10/20/2023
            <br />
            Ohio - OH 34.014602 6/11/2024
            <br />
            Oklahoma - OK 7062 6/30/2023
            <br />
            Oregon - OR DO198547 12/31/2023
            <br />
            Pennsylvania - PA OS020431 10/31/2024
            <br />
            Rhode Island - RI DO01057 6/30/2024
            <br />
            South Carolina - SC MDO.82979 6/30/2023
            <br />
            South Dakota - SD 12999 3/1/2023
            <br />
            Tennessee - TN 3331 10/31/2024
            <br />
            Texas - TX S1698 5/31/2024
            <br />
            Utah - UT 10385749-1204 5/31/2024
            <br />
            Vermont - VT 32.0133963 9/30/2024
            <br />
            Virginia - VA 102206300 10/31/2024
            <br />
            Washington - WA OP61055072 10/20/2023
            <br />
            West Virginia - WV 3750 6/30/2023
            <br />
            Wisconsin - WI 72103-21 10/31/2023
            <br />
            Wyoming - WY 14047A 6/30/2023
            <br />
            District of Columbia - DC DO034895 12/31/2024
            <br />
            <br />
            If you are from any of the following states you will be required to
            have a video consultation. The states that do not provide
            asynchronous tele-medicine are as follows. <br />
            <br /> NH, DE, LA, NJ, NM, WV and ID
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
