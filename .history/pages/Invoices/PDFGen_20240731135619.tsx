// @ts-nocheck
import { Page, Text, Document, StyleSheet, View } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 16,
    fontWeight: 800,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    textDecoration: "underline",
  },
  parent: {
    display: "flex",
    alignItems: "flex-start",
  },
  pagee: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
// type Props = {
//   companyName: string;
//   companyCountry: string;
//   address1: string;
//   address2: string;
// };
const PDFGen = (props) => {
  return (
    <Document>
      <Page>
        <Text style={styles.header} fixed>
          Invoice
        </Text>
        <Text>Invoice Date:{props.invoiceDate}</Text>
        <Text>Due Date:{props.invoiceDate}</Text>
        <View style={styles.parent}>
          <Text>Invoice Number:{props.invoiceNumber}</Text>
          {props.companyName}
        </View>
        <View style={styles.parent}>
          <Text>Company Details</Text>
          <Text style={styles.header} fixed>
            Company Name: {props.companyName}
          </Text>

          <Text style={styles.header} fixed>
            Company Address line 1: {props.address1}
          </Text>
          <Text style={styles.header} fixed>
            Company Address line 2 {props.address2}
          </Text>
          <Text style={styles.header} fixed>
            Company Country {props.companyCountry}
          </Text>
        </View>
        <View style={styles.parent}>
          <Text>Client Details</Text>
          <Text style={styles.header} fixed>
            Client Name:{props.clientName}
          </Text>

          <Text style={styles.header} fixed>
            Client Address line 1: {props.clientaddress1}
          </Text>
          <Text style={styles.header} fixed>
            Client Address line 2: {props.clientaddress2}
          </Text>
          <Text style={styles.header} fixed>
            Client Country {props.clientCountry}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFGen;
