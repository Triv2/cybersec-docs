export const cryptographyContent = {
  theory: `
    <h2>Introduction to Cryptography</h2>
    <p>
      Cryptography is the practice and study of techniques for secure communication in the presence of adversaries. Modern cryptography exists at the intersection of mathematics, computer science, electrical engineering, and physics, providing the foundation for information security in digital systems.
    </p>

    <h3>Cryptographic Primitives</h3>
    <p>Basic building blocks of cryptographic systems:</p>
    <ul>
      <li><strong>Symmetric Encryption</strong>: Using the same key for encryption and decryption (AES, ChaCha20)</li>
      <li><strong>Asymmetric Encryption</strong>: Using public/private key pairs (RSA, ECC)</li>
      <li><strong>Cryptographic Hash Functions</strong>: One-way functions producing fixed-length output (SHA-256, SHA-3)</li>
      <li><strong>Message Authentication Codes (MACs)</strong>: Ensuring message integrity (HMAC)</li>
      <li><strong>Digital Signatures</strong>: Providing authentication and non-repudiation (ECDSA, EdDSA)</li>
      <li><strong>Random Number Generation</strong>: Creating unpredictable values (CSPRNG)</li>
      <li><strong>Key Derivation Functions</strong>: Generating keys from passwords or shared secrets (PBKDF2, Argon2)</li>
    </ul>

    <h3>Cryptographic Protocols</h3>
    <p>Standardized methods for secure communication:</p>
    <ul>
      <li><strong>Transport Layer Security (TLS)</strong>: Securing internet communications</li>
      <li><strong>Secure Shell (SSH)</strong>: Secure remote login and file transfer</li>
      <li><strong>Pretty Good Privacy (PGP)</strong>: Email and file encryption</li>
      <li><strong>Signal Protocol</strong>: End-to-end encrypted messaging</li>
      <li><strong>IPsec</strong>: Network layer security for IP packets</li>
      <li><strong>Kerberos</strong>: Network authentication protocol</li>
      <li><strong>OAuth 2.0 & OpenID Connect</strong>: Authorization and authentication frameworks</li>
    </ul>

    <h3>Cryptanalysis and Attacks</h3>
    <p>Understanding potential weaknesses in cryptographic systems:</p>
    <ul>
      <li><strong>Brute Force Attacks</strong>: Trying all possible keys</li>
      <li><strong>Side-Channel Attacks</strong>: Exploiting implementation vulnerabilities (timing, power analysis)</li>
      <li><strong>Cryptanalytic Attacks</strong>: Mathematical weaknesses (differential, linear cryptanalysis)</li>
      <li><strong>Implementation Attacks</strong>: Exploiting bugs in code (padding oracle, bleichenbacher)</li>
      <li><strong>Quantum Computing Threats</strong>: Shor's and Grover's algorithms</li>
      <li><strong>Social Engineering</strong>: Bypassing cryptography through human factors</li>
      <li><strong>Key Management Issues</strong>: Improper key generation, storage, or exchange</li>
    </ul>
  `,
  examples: [
    {
      title: "Symmetric Encryption with AES",
      description: "Example of AES encryption and decryption in Python.",
      language: "python",
      code: "from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes\nfrom cryptography.hazmat.backends import default_backend\nimport os\n\ndef encrypt_aes_gcm(plaintext, key):\n    # Generate a random 96-bit IV\n    iv = os.urandom(12)\n    \n    # Create an encryptor object\n    encryptor = Cipher(\n        algorithms.AES(key),\n        modes.GCM(iv),\n        backend=default_backend()\n    ).encryptor()\n    \n    # Encrypt the plaintext\n    ciphertext = encryptor.update(plaintext) + encryptor.finalize()\n    \n    # Return IV, ciphertext, and authentication tag\n    return (iv, ciphertext, encryptor.tag)\n\ndef decrypt_aes_gcm(iv, ciphertext, tag, key):\n    # Create a decryptor object\n    decryptor = Cipher(\n        algorithms.AES(key),\n        modes.GCM(iv, tag),\n        backend=default_backend()\n    ).decryptor()\n    \n    # Decrypt the ciphertext\n    return decryptor.update(ciphertext) + decryptor.finalize()\n\n# Example usage\nkey = os.urandom(32)  # 256-bit key\nplaintext = b'Secret message'\n\n# Encrypt\niv, ciphertext, tag = encrypt_aes_gcm(plaintext, key)\n\n# Decrypt\ndecrypted = decrypt_aes_gcm(iv, ciphertext, tag, key)\nprint(decrypted.decode('utf-8'))  # 'Secret message'",
    },
    {
      title: "RSA Key Generation and Encryption",
      description: "Example of RSA key generation, encryption, and decryption.",
      language: "python",
      code: "from cryptography.hazmat.primitives.asymmetric import rsa, padding\nfrom cryptography.hazmat.primitives import hashes\nfrom cryptography.hazmat.backends import default_backend\n\ndef generate_rsa_keypair():\n    # Generate a private key\n    private_key = rsa.generate_private_key(\n        public_exponent=65537,\n        key_size=2048,\n        backend=default_backend()\n    )\n    \n    # Extract the public key\n    public_key = private_key.public_key()\n    \n    return private_key, public_key\n\ndef encrypt_with_rsa(message, public_key):\n    # Encrypt message with public key\n    ciphertext = public_key.encrypt(\n        message,\n        padding.OAEP(\n            mgf=padding.MGF1(algorithm=hashes.SHA256()),\n            algorithm=hashes.SHA256(),\n            label=None\n        )\n    )\n    return ciphertext\n\ndef decrypt_with_rsa(ciphertext, private_key):\n    # Decrypt ciphertext with private key\n    plaintext = private_key.decrypt(\n        ciphertext,\n        padding.OAEP(\n            mgf=padding.MGF1(algorithm=hashes.SHA256()),\n            algorithm=hashes.SHA256(),\n            label=None\n        )\n    )\n    return plaintext\n\n# Example usage\nprivate_key, public_key = generate_rsa_keypair()\nmessage = b'Secret message'\n\n# Encrypt with public key\nciphertext = encrypt_with_rsa(message, public_key)\n\n# Decrypt with private key\ndecrypted = decrypt_with_rsa(ciphertext, private_key)\nprint(decrypted.decode('utf-8'))  # 'Secret message'",
    },
    {
      title: "Digital Signature",
      description: "Example of creating and verifying a digital signature.",
      language: "python",
      code: "from cryptography.hazmat.primitives.asymmetric import rsa, padding\nfrom cryptography.hazmat.primitives import hashes\nfrom cryptography.hazmat.backends import default_backend\n\ndef generate_rsa_keypair():\n    # Generate a private key\n    private_key = rsa.generate_private_key(\n        public_exponent=65537,\n        key_size=2048,\n        backend=default_backend()\n    )\n    \n    # Extract the public key\n    public_key = private_key.public_key()\n    \n    return private_key, public_key\n\ndef sign_message(message, private_key):\n    # Sign a message with private key\n    signature = private_key.sign(\n        message,\n        padding.PSS(\n            mgf=padding.MGF1(hashes.SHA256()),\n            salt_length=padding.PSS.MAX_LENGTH\n        ),\n        hashes.SHA256()\n    )\n    return signature\n\ndef verify_signature(message, signature, public_key):\n    # Verify a signature with public key\n    try:\n        public_key.verify(\n            signature,\n            message,\n            padding.PSS(\n                mgf=padding.MGF1(hashes.SHA256()),\n                salt_length=padding.PSS.MAX_LENGTH\n            ),\n            hashes.SHA256()\n        )\n        return True  # Signature is valid\n    except Exception:\n        return False  # Signature is invalid\n\n# Example usage\nprivate_key, public_key = generate_rsa_keypair()\nmessage = b'Message to be signed'\n\n# Sign the message\nsignature = sign_message(message, private_key)\n\n# Verify the signature\nis_valid = verify_signature(message, signature, public_key)\nprint(f'Signature valid: {is_valid}')  # 'Signature valid: True'\n\n# Try to verify with tampered message\ntampered_message = b'Tampered message'\nis_valid = verify_signature(tampered_message, signature, public_key)\nprint(f'Tampered signature valid: {is_valid}')  # 'Tampered signature valid: False'",
    },
  ],
}

