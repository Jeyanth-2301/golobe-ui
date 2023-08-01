import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .notOneOf(
      [
        "0000000000000000",
        "1111111111111111",
        "2222222222222222",
        "3333333333333333",
        "4444444444444444",
        "5555555555555555",
        "6666666666666666",
        "7777777777777777",
        "8888888888888888",
        "9999999999999999"
      ],
      "Invalid card number"
    ),
  expDate: Yup.string()
    .required("Expiration date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid format (MM/YY)"),
  cvc: Yup.string()
    .required("CVC is required")
    .matches(/^\d{3}$/, "Invalid CVC"),
  nameOnCard: Yup.string()
    .required("Name on card is required")
    .matches(/^[A-Za-z\s]+$/, "Only alphabets and spaces are allowed")
});

const PopupForm = ({ open, handleClosePopup, handleCardSelection }) => {
  return (
    <Dialog open={open} onClose={handleClosePopup} fullWidth maxWidth="sm">
      <DialogContent>
        <Typography
          variant="n1"
        >
          <strong>Add New Card</strong>
        </Typography>

        <Formik
          initialValues={{
            cardNumber: "",
            expDate: "",
            cvc: "",
            nameOnCard: "",
            saveCardInfo: false
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            // Your form submission logic here
            handleClosePopup();
            handleCardSelection(values.cardNumber, values.expDate);
            setTimeout(() => {
              setSubmitting(false); // Set isSubmitting to false after form submission
              handleClosePopup();
            }, 1000);
          }}
        >
          {({ errors, touched, isValid }) => (
            <Form>
              <Field
                as={TextField}
                name="cardNumber"
                label="Card Number"
                fullWidth
                sx={{ mb: 2, mt: 3 }}
                error={touched.cardNumber && Boolean(errors.cardNumber)}
                helperText={touched.cardNumber && errors.cardNumber}
              />

              <Field
                as={TextField}
                name="expDate"
                label="Exp. Date (MM/YY)"
                fullWidth
                sx={{ width: "250px", mb: 2 }}
                error={touched.expDate && Boolean(errors.expDate)}
                helperText={touched.expDate && errors.expDate}
              />

              <Field
                as={TextField}
                name="cvc"
                label="CVC"
                fullWidth
                sx={{ width: "250px", mb: 2, ml: 6 }}
                error={touched.cvc && Boolean(errors.cvc)}
                helperText={touched.cvc && errors.cvc}
                type="password"
              />

              <Field
                as={TextField}
                name="nameOnCard"
                label="Name on Card"
                fullWidth
                sx={{ mb: 2 }}
                error={touched.nameOnCard && Boolean(errors.nameOnCard)}
                helperText={touched.nameOnCard && errors.nameOnCard}
              />

              <FormControlLabel
                value="secure"
                control={<Checkbox key="secureCheckbox" />}
                label="Securely save my information for 1-click checkout"
                labelPlacement="end"
              />

              <Button
                variant="contained"
                style={{ bgcolor: "#8dd3bb", marginTop: "15px" }}
                fullWidth
                type="submit"
                disabled={!isValid}
              >
                Add Card
              </Button>
              <Typography sx={{ mt: "35px" }}>
                By confirming your subscription, you allow The Outdoor Inn Crowd
                Limited to charge your card for this payment and future payments
                in accordance with their terms. You can always cancel your
                subscription.
              </Typography>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm;
