import React from "react";
import BasicButtons from "./Container/BasicButtons";
import MainCard from "./Container/MainCard";
import { Container, Box, Button } from "@mui/material";

function Hotels() {
    const images = [
        "https://s3-alpha-sig.figma.com/img/7e4a/08e9/67eaa378312eca22d0bd8fa83e200848?Expires=1691971200&Signature=Ez2Lnk4i6y-nZ-9cb33M9WyEM1FpyZ~qmiZtRA4xTHVRMRwthtaN03T4CQzagdz6gyY5pPwQaTAJhmotYPIKFTwtZ-tsLWD8gOSptOZcWs9HmSXf-Ch0-~EFMHMdjoSfaXSAVscSjoACktI2Dh1-ygLbQwndpbQ0pGdMmrGKZP6RRAXo8HgBmGSWaRpg4mAubX4fJrKiaTs0zb15ujFVTtwn7VFIjNjJ7KYxPQP7dUfCQ8mK2CEyi9qtHQoblVACLHHXl8L0AjGk34OsmH8PeJrZmoscn85TcACU0m0EGL9-cRWSJ0AseEEiNtoso6i~9kuRJwP7CG0u0VYHbB2seQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/fa31/3b30/f7d73d17cf6f01c9e24c3c6866da36f4?Expires=1691971200&Signature=EEHFVrwvAkDqRwEoIdKukODkn8JYlD~MGuGNPM3-ijNOkbOeiiijF2Bmpm-eoVR81A8Nq61AGs2BSkzQCMuFKXuyc7AF6dozTP2S9WF49Qa90Ftq0p4Cci6kAQekI4ayHv2OcCCOSX3Ypsekhgq0S5Y~sHac~YL7m~h55adnsN8a~uG8nT27mzXQFmAaW80BcWaIMaX7oXXFr-C9qFkSvO-66vW10ndipjA256r3HlXkX4lxNJTrQ7k-91qzBS60zRUhDnbQ-u~OCjWTAnGj0rJ6x9C82L7C2tYSXkoH9bSCLWS9IKxxaZEpc-Vxe~d1P173PBxAVIrUvZ3k0ku2vQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/b671/17ab/ce43660f4c4767223daf14862d3b7d4c?Expires=1691971200&Signature=GdHr6u6yc2-mh4Pd0yJNqmXJu0EV2YgeQQ6TViXhuCpZjD5C2cGpaBNILxseDjyUQ2ttyXKg5EKjs1RPrcfFB7AqZjtOnh8HkdhseUrg3~lVdc88ZBbeqdnMBe5yywCPDQp779ZpLaKDTExAcRASIVRCx2Zytn-IzdUemK3kHPERwnI4e9fHEIpromTkPOw-9NXXtWbgGwj-SbUhuCAw4b4FVaxk46HYQt8kMGLJN3WYT8nN-xYEB8xi0vqzqQd5X-LPLrWdYRZLjKI4gS0pMEQCeL8wbCfp4AOz7qz-RF9bYKzuLLVEXPDc0wWRzxUSn~II-lSBYAxuDAh4S8Tt-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        "https://s3-alpha-sig.figma.com/img/2e57/6a85/71d936841f198edabb1c003c220898d9?Expires=1691971200&Signature=j15ExpQEAbndUzEEPg8vRA0qDRxDi-hRQHoNZA-MpaQe1dzWCkJwHPxYBdmpkMWmLGvYzedFCraur2thiUpNMut~s3MVfGc8V91mYjXMjLWuKVQVkxuDm4UQBNk~Sg8czEH3U3kqjft7FdmADyDUNnQzr5GRzuS2Q5-TfY0URCxRIsxhy7I68U-S4uVXtvjVR41onBCL-qZ3SiCays5CazjYFptgaFG5tOXCt431msy2HyyqvpQsnWAekNH53jWo93F5CVIzEGR5FvWKh5kpNOsOUFRsz1buOq69UYlygtdZNSaEWOq6FDu6s79pY9rGJb7KM5wNIB1YhKynVHKIbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",];
    return (
        <>
            <Box sx={{ marginTop: '' }}>
                <Container sx={{ width: '899px', height: '1508px', marginTop: '-810px', marginRight: '100px' }}>
                    <Box sx={{ height: '150px' }}>
                        <BasicButtons />
                    </Box>
                    <Box sx={{ marginTop: '-100px' }}>
                        {[...Array(4)].map((_, index) => (
                            <MainCard key={index} images={images[index]} />
                        ))}
                    </Box>
                    <Box sx={{ marginTop: 3 }}>
                        <Button disableRipple disableElevation sx={{
                            width: 858, height: '48px', backgroundColor: "#112211",
                            '&:hover': {
                                backgroundColor: '#112211'
                            }
                        }}>
                            Show more results
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )

}
export default Hotels;