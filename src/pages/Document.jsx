import { React, useState, useEffect } from 'react';
import styles from '../css/Document.module.css';
import { app } from '../utils/firebase';
import Loading from '../components/Loading';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


const Document = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        const fetchPdfUrl = async () => {
            const storage = getStorage(app);
            const pdfRef = ref(storage, '/Documents/PAILON_Traditional-Module.pdf');
            try {
                const url = await getDownloadURL(pdfRef);
                setPdfUrl(url);
            } catch (error) {
                console.error('Error fetching PDF URL:', error);
            }
        };

        fetchPdfUrl();
    }, []);

    return (
        <div className={styles.container}>
            {pdfUrl ? (
                <iframe
                    className={styles.document}
                    src={pdfUrl}
                    width="100%"
                    height="500px"
                />
            ) : <Loading></Loading>}
        </div>
    );
};


export default Document;