import { NextSeo } from 'next-seo';
import React from 'react';
import { Page } from "../types";
import DefaultLayout from "../components/layout/Default";
import {Markdowndoc} from "../components/Document";
import {VStack,Heading} from "@chakra-ui/react";

const info = `

PLEASE READ THESE TERMS OF SERVICE CAREFULLY. AMONG OTHER THINGS, THEY PROVIDE KEY INFORMATION ON customer LEGAL RIGHTS AND OBLIGATIONS, FUTURE CHANGES TO THE TERMS, AUTOMATIC RENEWALS, AND LIMITATIONS OF LIABILITY. 
These OMNIEDGE Terms of Service (together with the Order Form, this “Agreement”) govern the Customer’s access to and Use of the OMNIEDGE Solution. This Agreement forms a binding legal agreement between OMNIEDGE Inc. (”OMNIEDGE“，OMNIEDGE”, “us”, “we”, “our”) and Customer. The term “Customer” refers to the person or the organization that the Customer represents in agreeing to this Agreement. If the Customer’s account is being setUp by someone who is not formally affiliated with an organization, the Customer is the individual creating the account. The “Parties” refer to OMNIEDGE and Customer and “Party” refers to each of OMNIEDGE and Customer. The "Service" refers to the solution OMNIEDGE provided in any form.
BY USING THE OMNIEDGE SOLUTION, THE CUSTOMER ACKNOWLEDGES THAT THE CUSTOMER HAS READ, ACCEPTS, AND AGREES TO BE BOUND BY AND COMPLY WITH THE TERMS AND CONDITIONS SET OUT IN THIS AGREEMENT, AS AMENDED FROM TIME TO TIME. IF THE CUSTOMER DOES NOT ACCEPT AND AGREE TO BE BOUND BY THIS AGREEMENT, THE CUSTOMER WILL IMMEDIATELY CEASE ANY FURTHER USE OF THE OMNIEDGE SOLUTION.
This Agreement is entered into the earlier of (the “Effective Date”): (a) the date Customer first uses any part of the OMNIEDGE Solution; and (b) the date Customer agrees to be bound by this Agreement.

## 1. Relationship with OMNIEDGE

1.1 Customers use of OMNIEDGE's products, software, services and websites (referred to collectively as the "Services" in this document and excluding any services provided to customer by OMNIEDGEUnder a separate written agreement) is subject to the terms of a legal agreement between customer and OMNIEDGE. This document explains how the agreement is made up, and sets out some of the terms of that agreement.

1.2 Unless otherwise agreed in writing with OMNIEDGE, customer agreement with OMNIEDGE will always include, at a minimum, the terms and conditions set out in this document. These are referred to below as the "Universal Terms".

1.3 Customer agreement with OMNIEDGE will also include the terms of any Legal Notices applicable to the Services, in addition to the Universal Terms. All of these are referred to below as the "Additional Terms".Where Additional Terms apply to a Service, these will be accessible for customer to read either within, or through customer use of, that Service.

1.4 The Universal Terms, together with the Additional Terms, form a legally binding agreement between the customer and OMNIEDGE in relation to customer use of the Services. It is important that customers take the time to read them carefully. Collectively, this legal agreement is referred to below as the "Terms".

1.5 If there is any contradiction between what the Additional Terms say and what the Universal Terms say, then the Additional Terms shall take precedence in relation to that Service.

## 2. Accepting the terms

2.1. In order to use the Services, the customer must first agree to the Terms. customer may not use the Services if customer does not accept the Terms.

2.2. customer can accept the Terms by:   (1). clicking to accept or agree to the Terms, where this option is made available to the customer by OMNIEDGE in the user interface for any Service; or   (2). by actually using the Services. In this case, the customer understands and agrees that OMNIEDGE will treat customer use of the Services as acceptance of the Terms from that point onwards.

## 3. Language of the terms

3.1. Where OMNIEDGE has provided the customer with a translation of the English language version of the Terms, then the customer agrees that the translation is provided for customer convenience only and that the English language versions of the Terms will govern customer relationship with OMNIEDGE.3.2. If there is any contradiction between what the English language version of the Terms says and what a translation says, then the English language version shall take precedence.

## 4. OMNIEDGE Solution

4.1. License to the OMNIEDGE Software. Subject to Customer’s and its Permitted customers’ compliance with the terms and conditions of this Agreement, OMNIEDGE grants to Customer a non-exclusive, non-transferable, and limited license to install, operate and use the OMNIEDGE Software during the Term on Customer’s devices solely for the purposes set out in the Order Form. Customer’sUse of the OMNIEDGE Software will be subject to any limitations described in this Agreement, in the documentation accompanying the OMNIEDGE Software, or as otherwise agreed in writing by the Parties.

4.2. OMNIEDGE is constantly innovating in order to provide the best possible experience for its users. customer acknowledge and agree that the form and nature of the Services which OMNIEDGE provides may change from time to time without prior notice to the customer.

4.3. As part of this continuing innovation, customers acknowledge and agree that OMNIEDGE may stop (permanently or temporarily) providing the Services (or any features within the Services) to customers or toUsers generally at OMNIEDGE's sole discretion, without prior notice to the customer. Customers may stop using the Services at any time. Customers do not need to specifically inform OMNIEDGE when customers stop using the Services.

4.4. Customer acknowledges and agrees that if OMNIEDGE disables access to the customer account, the customer may be prevented from accessing the Services, customer account details, or any files or other content which is contained in a customer account.

## 5. Use the Service by the customer

5.1. CUSTOMER REPRESENTS AND WARRANTS TO OMNIEDGE THAT CUSTOMER HAS THE CAPACITY TO ENTER INTO THIS LEGALLY BINDING AGREEMENT. IF THE CUSTOMER IS USING THE OMNIEDGE SOLUTION ON BEHALF OF ANOTHER PERSON, THE CUSTOMER HEREBY REPRESENTS AND WARRANTS TO OMNIEDGE THAT THE CUSTOMER HAS THE AUTHORITY TO BIND SUCH PERSON TO THIS AGREEMENT.

5.2. Customer agrees to use the Services only for purposes that are permitted by the Terms and any applicable law, regulation, or generally accepted practices or guidelines in the relevant jurisdictions (including any laws regarding the export of data or software to and from the United States or other relevant countries).

5.3. Customers are not allowed to access orUse OMNIEDGE Services if customers are located, incorporated, or otherwise established in, or a citizen or resident of:(1).a country or region that is subject to comprehensive U.S. economic sanctions (such as those maintained by the U.S. Treasury Department’s Office of Foreign Assets Control (“OFAC”))(2). a country or region that is subject to comprehensive E.U. economic sanctions(3). Belarus, Burma, Benin, Burkina Faso, Cameroon, Cote D'Ivoire, Cuba, Democratic Republic of Congo, Ghana, Iran, Iraq, Liberia, Niger, Nigeria, North Korea, Senegal, Seychelles, Sudan, Syrian Arab Republic, Togo, United Arab Emirates or Zimbabwe(4). a jurisdiction where it would be illegal according to Applicable Law for the customer (by reason of customer nationality, domicile, citizenship, residence or otherwise) to access or use the Services; or(5). where the publication or availability of the Services is prohibited or contrary to local law or regulation, or could subject OMNIEDGE to any local registration or licensing requirements(together, the “Restricted Jurisdictions”). OMNIEDGE may, in its sole discretion, implement controls to restrict access to its Services or website in any of the Restricted Jurisdictions. If OMNIEDGE determines that customers are accessing the Services or OMNIEDGE website from any Restricted Jurisdiction, or have given false representations as to customer location of incorporation, establishment, citizenship, or place of residence, OMNIEDGE reserves the right to close any of customer accounts immediately and prohibit further access to OMNIEDGE Services without any claim for refund.

5.4. Customer agrees that customer will not engage in any activity that interferes with or disrupts the Services (or the servers and networks which are connected to the Services). This includes but is not limited to spamming, hacking, network attacks. Using OMNIEDGE service with any automated tools (for example but not limited to web crawlers, SEO tools, web spamming tools, etc...) is not allowed.

5.5. Unless the customer have been specifically permitted to do so in a separate agreement with OMNIEDGE, the customer agrees that the customer will not reproduce, duplicate, copy, sell, trade, or resell the Services for any purpose.

5.6. Customer agrees that customer is solely responsible for (and that OMNIEDGE has no responsibility to the customer or to any third party for) any breach of customer obligations under the Terms and for the consequences (including any loss or damage which OMNIEDGE may suffer) of any such breach.

5.7. OMNIEDGE account is untransferable.  Customers can use OMNIEDGE account on the amount of the physical devices at the same time stated in the customer active plan. OMNIEDGE may enforce customers to authorize devices that are allowed to connect. Customer will not itself, and will not permit others to: 

1). Sub-license, sell, rent, lend, lease or distribute the OMNIEDGE Solution or any Intellectual Property Rights therein or otherwise make the OMNIEDGE Solution available to the third parties other than Permitted customers;

2). Use the OMNIEDGE Solution to permit timesharing, service bureaus or commercially exploit the OMNIEDGE Solution;

3). Use or access the OMNIEDGE Solution: (A) in violation of any Applicable Law or Intellectual Property Right; (B) in a manner that threatens the security or functionality of the OMNIEDGE Solution, including by taking any action that imposes, or that may impose, in OMNIEDGE’s discretion, an unreasonable or disproportionately large load on OMNIEDGE’s systems or infrastructure; or (C) for any purpose or in any manner not expressly permitted in this Agreement;

4). Use the OMNIEDGE Solution to create, collect, transmit, store,use or process any Customer Data: A. that contains any computer viruses, worms, malicious code, or any software intended to damage or alter a computer system or data;
B. that Customer does not have the lawful right to create, collect, transmit, store, Use or process; C. that violates any Applicable Laws, or infringes, violates or otherwise misappropriates the Intellectual Property Rights or other rights of any third party (including any moral right, privacy right or right of publicity);

5). Except for any Updates to the OMNIEDGE Software installed by Customer pursuant to Section 7(a), Modify the OMNIEDGE Solution;

6). Attempt to reverse engineer, decompile or disassemble the OMNIEDGE Solution;

7). Remove or obscure any proprietary notices or labels on the OMNIEDGE Solution, including brand, copyright, trademark, and patent or patent pending notices;

8). Access or use the OMNIEDGE Solution for the purpose of building a similar or competitive product or service; or

9). Perform any vulnerability, penetration, or similar testing of the OMNIEDGE Solution.

10). Use of OMNIEDGE Solution in a datacenter. 
5.8. Some product features advertised on our website (such as but not limited to Smart Mode) and certain protocols may beUnavailable in the customer's countries. For complete details about the availability of individual features please ask our support. By purchasing OMNIEDGE membership customers agree that some features/protocols / devices supported may be limited without prior notice. Such change of available services is not a valid reason for a full nor partial refund.

## 6. Privacy

6.1. Customer Understands that Personal Information, including the Personal Information of Permitted customers, will be treated in accordance with OMNIEDGE’s privacy policy located at [privacy](/privacy).

6.2. Customer agrees to the use of customer data in accordance with OMNIEDGE's privacy policies.

## 7. Content

7.1 Customer understand that all information (such as data files, written text, computer software, music, audio files or other sounds, photographs, videos or other images) which you may have access to as part of, or through your use of, the Services are the sole responsibility of the person from which such Content originated. All such information is referred to below as the "Content."

7.2 Customer should be aware that Content presented to you as part of the Services, including but not limited to advertisements in the Services and sponsored Content within the Services may be protected by intellectual property rights which are owned by the sponsors or advertisers who provide that Content to OMNIEDGE (or by other persons or companies on their behalf). You may not modify, rent, lease, loan, sell, distribute or create derivative works based on this Content (either in whole or in part) unless you have been specifically told that you may do so by OMNIEDGE or by the owners of that Content, in a separate agreement.

7.3 OMNIEDGE reserves the right (but shall have no obligation) to pre-screen, review, flag, filter, modify, refuse or remove any or all Content from any Service. In addition, there are commercially available services and software to limit access to material that you may find objectionable.

7.4 Customer understand that by using the Services you may be exposed to Content that you may find offensive, indecent or objectionable and that, in this respect, you use the Services at your own risk.

7.5 Customer agree that you are solely responsible for (and that OMNIEDGE has no responsibility to you or to any third party for) any Content that you create, transmit or display while using the Services and for the consequences of your actions (including any loss or damage which OMNIEDGE may suffer) by doing so.

## 8. Other Content

8.1 The Services may include hyperlinks to other websites or content or resources. OMNIEDGE may have no control over any websites or resources which are provided by companies or persons other than OMNIEDGE.

8.2 Customer acknowledge and agree that OMNIEDGE is not responsible for the availability of any such external sites or resources, and does not endorse any advertising, products, or other materials on or available from such websites or resources.

8.3 Customer acknowledge and agree that OMNIEDGE is not liable for any loss or damage which may be incurred by you as a result of the availability of those external sites or resources, or as a result of any reliance placed by you on the completeness, accuracy, or existence of any advertising, products or other materials on, or available from, such web sites or resources.

## 9.  Content license from the customer

9.1. Customer retains copyright and any other rights customer already hold in Content which customer submit, post or display on or through the OMNIEDGE Services.

## 10. Suspension of OMNIEDGE Service

10.1. OMNIEDGE may from time to time to suspend the Customer’s access to or Use of the OMNIEDGE Solution or any component thereof: 1). for scheduled maintenance;2). due to a Force Majeure;3). if Customer or any Permitted User violates any provision of this term;4). to address any emergency security concerns; or5). if required to do so by a Governmental or Regulatory Authority or as a result of a change in Applicable Law; 6). modify the OMNIEDGE Solution; 7). provided that the OMNIEDGE Solution continues to materially conform to the description set forth in the Order Form.

## 11. Support

11.1 OMNIEDGE will provide Customer with technical support for the OMNIEDGE Solution (“Support Services”) via (a) twitter at the [OmniEdgeio](https://twitter.com/omniedgeio), or email at the address [support@omniedge.io](mailto:support@omniedge.io) indicated on the Order Form,  or any other method as set out in the Order Form.

## 12. Reservation of Rights

12.1. Except as specifically set forth in this Agreement, Customer retains all rights, title, and interest including all Intellectual Property Rights in or to the Customer Data. Customer grants to OMNIEDGE a nonexclusive, worldwide, royalty-free, irrevocable, sublicensable, and fully paid-up right to:1). transmit Customer Content through the OMNIEDGE Solution;2). access, collect, use, process, store, disclose and transmit all other Customer Data to (A) provide the OMNIEDGE Solution; (B) improve and enhance the OMNIEDGE Solution and its other offerings; and (C) produce data, information, or other materials that do not identify or relate to a particular individual or company (such data, information and materials, the “Aggregated Data”).

12.2. OMNIEDGE may Use, process, store, disclose and transmit the Aggregated Data for any purpose and without restriction or obligation to Customer of any kind.

12.3. OMNIEDGE or its licensors retain all rights, title, and interest including all Intellectual Property Rights in and to (i) the Services; (ii) the OMNIEDGE Metadata; (iii) anything Used, developed, or delivered by or on behalf of OMNIEDGE Under this Agreement; and (iv) any Modifications to the foregoing. OMNIEDGE grants Customer a nonexclusive, worldwide, royalty-free, sublicensable, and fully paid-up right during the Term to access, collect,use, process, store, disclose and transmit OMNIEDGE Metadata in connection with its access and use of the OMNIEDGE Solution.

12.4. All rights not expressly granted by OMNIEDGE to Customer Under this Agreement are reserved.

## 13. Software updates

13.1. The Software which customers use may automatically download and install updates from time to time from OMNIEDGE. These updates are designed to improve, enhance and further develop the Services and may take the form of bug fixes, enhanced functions, new software modules, and completely new versions. You agree to receive such updates (and permit OMNIEDGE to deliver these to customers) as part of customer use of the Services.

## 14. Exclusion of warranties

14.1. Customer expressly understands and agrees that your use of the services is at your sole risk and that the services are provided "as is" and "as available."

14.2. In particular, OMNIEDGE, its subsidiaries, and affiliates, and its licensors do not represent or warrant to you that:1). the OMNIEDGE solution will be uninterrupted, timely, secure, or error, or that all errors can or will be corrected;2). the service will meet customer's requirements;3). any information obtained by the customer as a result of customer use of the services will be accurate or reliable, and4). that defects in the operation or functionality of any software provided to customer as part of the services will be corrected.

14.3. Any material downloaded or otherwise obtained through the use of the services is done at the customer's own discretion and risk and that customer will be solely responsible for any damage to the customer's computer system or other endpoints, devices, or loss of data that results from the download of any such material.

14.4. No advice or information, whether oral or written, obtained by the customer from OMNIEDGE or through or from the services shall create any warranty not expressly stated in the terms.

14.5. Omniedge further expressly disclaims all warranties and conditions of any kind, whether express or implied, including, but not limited to the implied warranties and conditions of merchantability, fitness for a particular purpose, and non-infringement.

## 15. Limitation of Liabilities

15.1. SUBJECT TO OVERALL PROVISION IN PARAGRAPH 13.1 ABOVE, YOU EXPRESSLY UNDERSTAND AND AGREE THAT OMNIEDGE, ITS SUBSIDIARIES AND AFFILIATES, AND ITS LICENSORS SHALL NOT BE LIABLE TO YOU FOR:1). ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH MAY BE INCURRED BY YOU, HOWEVER, CAUSED AND UNDER ANY THEORY OF LIABILITY.. THIS SHALL INCLUDE, BUT NOT BE LIMITED TO, ANY LOSS OF PROFIT (WHETHER INCURRED DIRECTLY OR INDIRECTLY), ANY LOSS OF GOODWILL OR BUSINESS REPUTATION, ANY LOSS OF DATA SUFFERED, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR OTHER INTANGIBLE LOSS;2). ANY LOSS OR DAMAGE WHICH MAY BE INCURRED BY YOU, INCLUDING BUT NOT LIMITED TO LOSS OR DAMAGE AS A RESULT OF:

- ANY RELIANCE PLACED BY YOU ON THE COMPLETENESS, ACCURACY, OR EXISTENCE OF ANY ADVERTISING, OR AS A RESULT OF ANY RELATIONSHIP OR TRANSACTION BETWEEN YOU AND ANY ADVERTISER OR SPONSOR WHOSE ADVERTISING APPEARS ON THE SERVICES;

- ANY CHANGES WHICH OMNIEDGE MAY MAKE TO THE SERVICES, OR FOR ANY PERMANENT OR TEMPORARY CESSATION IN THE PROVISION OF THE SERVICES (OR - ANY FEATURES WITHIN THE SERVICES);

- THE DELETION OF, CORRUPTION OF, OR FAILURE TO STORE, ANY CONTENT AND OTHER COMMUNICATIONS DATA MAINTAINED OR TRANSMITTED BY OR THROUGH YOUR USE OF THE SERVICES;

- YOUR FAILURE TO PROVIDE OMNIEDGE WITH ACCURATE ACCOUNT INFORMATION;

- YOUR FAILURE TO KEEP YOUR PASSWORD OR ACCOUNT DETAILS SECURE AND CONFIDENTIAL;

15.2. THE LIMITATIONS ON OMNIEDGE'S LIABILITY TO YOU IN PARAGRAPH 14.1 ABOVE SHALL APPLY WHETHER OR NOT OMNIEDGE HAS BEEN ADVISED OF OR SHOULD HAVE BEEN AWARE OF THE POSSIBILITY OF ANY SUCH LOSSES ARISING.

## 16.   Ending a relationship with OMNIEDGE

16.1. The Terms will continue to apply until terminated by either customer or OMNIEDGE as set out below.

16.2. OMNIEDGE may at any time, terminate its legal agreement with the customer if:1). the customer has breached any provision of the Terms (or have acted in manner which clearly shows that customer does not intend to, or are unable to comply with the provisions of the Terms); or2). OMNIEDGE is required to do so by law (for example, where the provision of the Services to the customer is, or becomes, unlawful); or3). the partner with whom OMNIEDGE offered the Services to the customer has terminated its relationship with OMNIEDGE or ceased to offer the Services to the customer; or4). OMNIEDGE is transitioning to no longer providing the Services to users in the country in which customers are resident or from which customers use the service; or the provision of the Services to customers by OMNIEDGE is, in OMNIEDGE's opinion, no longer commercially viable.

16.3. Nothing in this Section shall affect OMNIEDGE's rights regarding the provision of Services under Section 4 of the Terms.

16.4. When these Terms come to an end, all of the legal rights, obligations, and liabilities that customer and OMNIEDGE have benefited from, been subject to (or which have accrued over time whilst the Terms have been in force) or which are expressed to continue indefinitely, shall be unaffected by this cessation, and the provisions of paragraph 19.7 shall continue to apply to such rights, obligations and liabilities indefinitely.

## 17. Changes to the Terms

17.1 Customer understands and agrees that if a customer uses the Services after the date on which the Terms or Additional Terms have changed, OMNIEDGE will treat customer use as acceptance of the updated Universal Terms or Additional Terms.
`

export const Terms: Page = () => {
  return (
    <div>
      <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://omniedge.io/privacy',
          title: 'OmniEdge Privacy',
        }}
      />
      <VStack padding="4" mt={10}>
      <Heading fontWeight="semibold" fontSize="2xl">
      Terms of Service
      </Heading>
      <br></br>
      <Markdowndoc info={info} />
      </VStack>
    </div>
  )
}

Terms.layout = DefaultLayout;

export default Terms;