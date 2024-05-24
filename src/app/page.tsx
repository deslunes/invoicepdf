"use client";
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import dynamic from "next/dynamic";
import { useState } from 'react';
import { Table, TR, TH, TD } from '@ag-media/react-pdf-table';




const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false
  },
);

Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
  ]
});


export default function Home() {
  const [text, setText] = useState('text');

  const [fnumber, set_fnumber] = useState('001');
  const [fdate, set_fdate] = useState('09/11/2002');

  const [entName, set_entName] = useState('Tesla');
  const [entNumber, set_entNumber] = useState('+33 6 36 99 99 99');
  const [entMail, set_entMail] = useState('mail@tesla.com');
  const [entSite, set_entSite] = useState('www.tesla.com');

  const [clientName, set_clientName] = useState('Richard');
  const [clientNumber, set_clientNumber] = useState('+33 6 36 77 77 77');
  const [clientMail, set_clientMail] = useState('mail@richard.com');
  const [clientSite, set_clientSite] = useState('www.richard.com');

  const [conditions, set_conditions] = useState(`- Paiement intégral dû dans les 30 jours suivant la date de facturation.
  - Paiement par virement bancaire uniquement.
  - Tous les paiements doivent être libellés en [devise].
  - En cas de retard de paiement, des frais de pénalité de [montant ou pourcentage] seront appliqués.
  - Pour toute question concernant la facture ou le paiement, veuillez contacter [nom et coordonnées du responsable].`);

  function ffnumber(event: any) {
    set_fnumber(event.target.value);
  }

  function ffdate(event: any) {
    set_fdate(event.target.value);
  }

  function fset_entName(event: any) {
    set_entName(event.target.value);
  }

  function fset_entNumber(event: any) {
    set_entNumber(event.target.value);
  }

  function fset_entMail(event: any) {
    set_entMail(event.target.value);
  }

  function fset_entSite(event: any) {
    set_entSite(event.target.value);
  }

  function fset_clientName(event: any) {
    set_clientName(event.target.value);
  }

  function fset_clientNumber(event: any) {
    set_clientNumber(event.target.value);
  }

  function fset_clientMail(event: any) {
    set_clientMail(event.target.value);
  }

  function fset_clientSite(event: any) {
    set_clientSite(event.target.value);
  }

  function fset_conditions(event: any) {
    set_conditions(event.target.value);
  }


  return (<>
    <div className="flex">
      <div className='w-full bg-white p-6 flex flex-wrap'>

        <div className='bg-gray-100 m-2 p-4 w-fit rounded-md'>

          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Numéro de facture</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="fnumber" name="fnumber" value={fnumber} onChange={ffnumber} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Date de facture</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="fdate" name="fdate" value={fdate} onChange={ffdate} />
          </div>

        </div>

        <div className='bg-gray-100 m-2 p-4 w-fit rounded-md'>
          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Nom de l'entreprise</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="entName" name="entName" value={entName} onChange={fset_entName} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Numéro de l'entreprise</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="entNumber" name="entNumber" value={entNumber} onChange={fset_entNumber} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Mail de l'entreprise</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="entMail" name="entMail" value={entMail} onChange={fset_entMail} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Site de l'entreprise</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="entSite" name="entSite" value={entSite} onChange={fset_entSite} />
          </div>
        </div>

        <div className='bg-gray-100 m-2 p-4 w-fit rounded-md'>
          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Nom de l'entreprise</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="clientName" name="clientName" value={clientName} onChange={fset_clientName} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Numéro de l'entreprise</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="clientNumber" name="clientNumber" value={clientNumber} onChange={fset_clientNumber} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Mail de l'entreprise</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="clientMail" name="clientMail" value={clientMail} onChange={fset_clientMail} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="fnumber" className='text-black'>Site de l'entreprise</label>
            <input className="text-black border-2 border-black rounded-md w-60" type="clientSite" name="clientSite" value={clientSite} onChange={fset_clientSite} />
          </div>
        </div>










      </div>
      <PDFViewer className='w-2/3 h-screen'>
        <Document>
          <Page size="A4" style={styles.body}>
            <Text style={styles.header} fixed>
              ~ Template made by Filaicht ~
            </Text>
            <View >
              <Text style={styles.title}>Facture</Text>
              <Text style={styles.section}>Numéro de facture : {fnumber}</Text>
              <Text style={styles.section}>Date de facturation : {fdate}</Text>

              <Text style={styles.title}>Vendeur</Text>
              <Text style={styles.section}>Nom  : {entName}</Text>
              <Text style={styles.section}>Numéro : {entNumber}</Text>
              <Text style={styles.section}>e-mail : {entMail}</Text>
              <Text style={styles.section}>Site internet : {entSite}</Text>

              <Text style={styles.title}>Client</Text>
              <Text style={styles.section}>Nom  : {clientName}</Text>
              <Text style={styles.section}>Numéro : {clientNumber}</Text>
              <Text style={styles.section}>e-mail : {clientMail}</Text>
              <Text style={styles.section}>Site internet : {clientSite}</Text>
              <Text style={styles.title}>Détails de la facture</Text>


              <Table>
                <TH>
                  <TD style={styles.left} >Description</TD>
                  <TD style={styles.right}>Montant</TD>
                </TH>
                <TR>
                  <TD style={styles.left}>Data 1</TD>
                  <TD style={styles.right}>Data 2</TD>
                </TR>
              </Table>
              <Text style={styles.title}>Conditions de paiement</Text>
              <Text style={styles.section}>{conditions}</Text>

              <Text style={styles.section}>{text}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  </>)
}
// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  section: {
    fontSize: 12,
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 300,
    padding: "10 0",
    flexGrow: 1,
  },
  right: {
    width: 20,
  },
  left: {
    width: 80,
  },
});


