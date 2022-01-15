interface AccessCerts {
    keys: Key[];
    public_cert: Cert;
    public_certs: Cert[];
}

interface Key {
    kid: string;
    kty: string;
    alg: string;
    use: string;
    e: string;
    n: string;
}

interface Cert {
    kid: string;
    cert: string;
}
