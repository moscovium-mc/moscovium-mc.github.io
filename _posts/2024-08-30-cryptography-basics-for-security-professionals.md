---
layout: post
title: Cryptography Fundamentals for Security Professionals
date: 2024-08-30 09:45:00-0400
description: Understanding the cryptographic principles and algorithms that underpin modern information security
tags: cryptography encryption security-fundamentals applied-cryptography
categories: security
giscus_comments: true
related_posts: false
---

Cryptography forms the mathematical foundation upon which modern information security is built. From securing communications across the internet to protecting data at rest, from authenticating users to ensuring transaction integrity, cryptographic techniques enable the trust and security that digital systems require. For security professionals, understanding cryptographic fundamentals—the core concepts, algorithm types, implementation considerations, and common pitfalls—is essential for evaluating security solutions, making informed architectural decisions, and avoiding catastrophic errors.

## Core Security Properties

Cryptography addresses several fundamental security properties, each serving distinct but often complementary purposes in security systems.

**Confidentiality:** Confidentiality ensures that information is accessible only to authorized parties. Encryption transforms plaintext (readable data) into ciphertext (unreadable data) using cryptographic algorithms and keys. Only parties possessing the appropriate decryption key can reverse this transformation to recover the original plaintext.

Confidentiality protects sensitive data from eavesdroppers on network communications, unauthorized access to stored data, and information leakage through various channels. It's the most intuitive security property to non-specialists—keeping secrets secret.

**Integrity:** Integrity ensures that data hasn't been modified without authorization. Cryptographic hash functions and message authentication codes detect whether data has been altered, whether through malicious tampering or accidental corruption.

Unlike confidentiality, which hides information, integrity verification can work with publicly visible data—the critical property is detecting any changes. Digital signatures combine integrity with authentication, proving both that data is unmodified and who created it.

**Authentication:** Authentication verifies the identity of communicating parties or the origin of data. Without authentication, encryption alone provides limited security—you might be communicating confidentially with an attacker rather than your intended correspondent.

Cryptographic authentication mechanisms prevent impersonation, man-in-the-middle attacks, and ensure that data originates from claimed sources. Authentication frequently relies on asymmetric cryptography or shared secrets established through secure channels.

**Non-Repudiation:** Non-repudiation prevents parties from denying actions they performed. Digital signatures provide non-repudiation by creating unforgeable proof that a specific party signed a message using their private key. This property is particularly important for contracts, financial transactions, and legal documents where proving authorship matters.

## Symmetric Encryption

Symmetric encryption uses the same key for both encryption and decryption. This simplicity provides performance advantages but creates key distribution challenges—both parties must possess the shared secret key.

**Advanced Encryption Standard (AES):** AES is the current standard for symmetric encryption, adopted by the U.S. government in 2001 to replace DES. It supports key sizes of 128, 192, and 256 bits. AES-128 provides adequate security for most applications, while AES-256 offers additional margin against future cryptanalytic advances.

AES operates on 128-bit blocks of data. Various modes of operation (CBC, CTR, GCM) determine how multiple blocks are encrypted and whether the scheme provides only confidentiality or both confidentiality and integrity.

**ChaCha20:** ChaCha20 is a stream cipher designed as an alternative to AES, particularly for software implementations on processors without AES hardware acceleration. Combined with Poly1305 for authentication, ChaCha20-Poly1305 provides authenticated encryption and appears in TLS, SSH, and other protocols.

**Legacy Algorithms:** DES (Data Encryption Standard) and Triple-DES are outdated and should not be used for new applications. DES's 56-bit key is far too small by modern standards—it can be brute-forced in hours. Triple-DES applies DES three times with different keys, increasing security but remaining slower than modern alternatives.

**Modes of Operation:** Block ciphers like AES require modes of operation to encrypt data larger than a single block. Electronic Codebook (ECB) mode is fundamentally insecure for most uses—identical plaintext blocks produce identical ciphertext blocks, leaking patterns. Cipher Block Chaining (CBC) and Counter (CTR) modes address this but require careful initialization vector handling. Galois/Counter Mode (GCM) provides authenticated encryption, combining confidentiality and integrity in a single operation.

## Asymmetric Cryptography

Asymmetric or public-key cryptography uses key pairs—a public key that can be widely distributed and a private key kept secret. Data encrypted with the public key can only be decrypted with the private key, and vice versa for digital signatures.

**RSA:** RSA (Rivest-Shamir-Adleman) was among the first practical public-key systems and remains widely used. RSA's security relies on the computational difficulty of factoring large numbers. Modern RSA should use keys of at least 2048 bits, with 3072 or 4096 bits for high-security applications or long-term protection.

RSA supports both encryption and digital signatures. However, RSA encryption requires careful padding schemes (OAEP) to avoid vulnerabilities, and RSA signatures need proper padding (PSS) for security proofs.

**Elliptic Curve Cryptography (ECC):** ECC provides equivalent security to RSA with much smaller key sizes. A 256-bit ECC key offers comparable security to a 3072-bit RSA key. This efficiency makes ECC attractive for constrained environments like mobile devices or embedded systems.

Common ECC algorithms include ECDSA (Elliptic Curve Digital Signature Algorithm) for signatures and ECDH (Elliptic Curve Diffie-Hellman) for key agreement. Curve selection matters—NIST curves like P-256 are widely supported but face some controversy, while Curve25519 and Ed25519 offer strong security properties with simpler implementations less prone to subtle bugs.

**Diffie-Hellman Key Exchange:** Diffie-Hellman enables two parties to establish a shared secret over an insecure channel without prior shared secrets. Each party generates a public-private key pair, exchanges public keys, and uses their private key with the other's public key to derive the same shared secret.

Modern protocols often use Ephemeral Diffie-Hellman (DHE or ECDHE) where keys are generated for each session rather than reused. This provides forward secrecy—compromising long-term keys doesn't compromise past sessions.

## Cryptographic Hash Functions

Hash functions take arbitrary-length input and produce fixed-length output (the hash or digest) with specific security properties. Cryptographic hashes must be collision-resistant (hard to find two inputs producing the same hash), preimage-resistant (hard to find an input producing a specific hash), and avalanche (small input changes completely alter the hash).

**SHA-2 Family:** SHA-256 and SHA-512 are the most commonly used secure hash functions, part of the SHA-2 family standardized by NIST. SHA-256 produces 256-bit hashes suitable for most applications. SHA-512 produces 512-bit hashes and can be faster on 64-bit processors despite the larger output.

**SHA-3:** SHA-3, based on the Keccak algorithm, was standardized as an alternative to SHA-2 with different mathematical foundations. While SHA-2 remains secure, SHA-3 provides diversity—a breakthrough attack on one family wouldn't necessarily affect the other.

**BLAKE2:** BLAKE2 is a fast cryptographic hash function, often faster than SHA-2 and SHA-3 while maintaining strong security properties. It appears in various applications including file integrity verification and password hashing.

**Broken Hash Functions:** MD5 and SHA-1 are cryptographically broken—practical collision attacks exist for both. They should not be used for security purposes, though MD5 sometimes appears in non-security contexts like checksums where collision resistance isn't required. Even there, better alternatives exist.

## Digital Signatures

Digital signatures combine asymmetric cryptography with hashing to provide authentication, integrity, and non-repudiation. The signer creates a hash of the message and encrypts it with their private key. Recipients decrypt with the public key and verify the hash matches the message.

**RSA Signatures:** RSA supports digital signatures by reversing encryption—signing uses the private key while verification uses the public key. Proper padding schemes like PSS are essential for security.

**ECDSA:** Elliptic Curve Digital Signature Algorithm provides signatures using ECC. ECDSA signatures are much smaller than RSA signatures with equivalent security. However, ECDSA implementations require careful attention to random number generation—weak randomness can leak private keys.

**EdDSA:** Edwards-curve Digital Signature Algorithm, particularly the Ed25519 variant, offers strong security with simpler implementations less prone to implementation errors than ECDSA. EdDSA has become increasingly popular in modern protocols.

## Key Management

Even the strongest cryptographic algorithms become vulnerable if keys are poorly managed. Key management encompasses the entire lifecycle of cryptographic keys.

**Key Generation:** Keys must be generated using cryptographically secure random number generators (CSPRNGs). Operating systems provide CSPRNGs through APIs like /dev/urandom on Unix systems or CryptGenRandom on Windows. Never use standard pseudo-random number generators for cryptographic key generation—they're predictable and will compromise security.

Insufficient entropy during key generation creates vulnerabilities. Systems must ensure adequate entropy before generating keys, particularly important during boot before entropy pools are full.

**Key Storage:** Private keys and symmetric keys must be protected from unauthorized access. Options include hardware security modules (HSMs) that perform cryptographic operations without exposing keys, trusted platform modules (TPMs) in commodity hardware, secure enclaves in modern processors, encrypted key stores with strong access controls, and for highest security, air-gapped systems.

Never hardcode keys in source code or configuration files—these inevitably end up in version control, backups, or logs. Use key management systems, environment variables, or secure configuration management.

**Key Distribution:** Symmetric cryptography requires both parties to possess the shared key, creating distribution challenges. Key distribution mechanisms include out-of-band communication through separate secure channels, key derivation from shared passwords using KDFs, key exchange protocols like Diffie-Hellman, and hierarchical key systems with long-term keys protecting session keys.

Public key infrastructure (PKI) addresses key distribution for asymmetric cryptography through certificates binding public keys to identities, signed by trusted certificate authorities.

**Key Rotation:** Periodically changing keys limits exposure from potential compromise. Rotation frequency depends on threat model, sensitivity, and key use. Compromised keys affect only data protected during their validity period if rotation is implemented properly.

**Key Destruction:** When keys are no longer needed, they must be securely destroyed. Simple file deletion is insufficient—keys may persist in memory, swap files, backups, or SSD wear-leveling areas. Secure deletion requires overwriting key material, clearing memory containing keys, and ensuring keys don't persist in logs or other artifacts.

## Common Implementation Pitfalls

Cryptography is notoriously difficult to implement correctly. Even experts make mistakes, and even small errors can completely compromise security.

**Custom Cryptography:** The cardinal rule of applied cryptography is: don't implement cryptographic algorithms yourself. Use established, peer-reviewed libraries written by cryptographic experts. Implementing AES or RSA from scratch will almost certainly contain subtle bugs exploitable by attackers.

This extends beyond algorithm implementation to protocol design. Creating custom cryptographic protocols invites disaster. Use established protocols like TLS, SSH, or Signal Protocol rather than inventing your own.

**Weak or Deprecated Algorithms:** Don't use MD5 or SHA-1 for security purposes. Don't use DES or RC4. Don't use RSA keys smaller than 2048 bits. Don't use weak Diffie-Hellman parameters. Standards bodies and security researchers publish guidance on deprecated algorithms—follow it.

**Insufficient Key Lengths:** Security depends on key length. 56-bit DES keys are trivially breakable. 1024-bit RSA keys should be retired. Follow current recommendations: 128-bit or larger for symmetric keys, 2048-bit or larger for RSA, 256-bit or larger for ECC.

**Poor Random Number Generation:** Using predictable "random" numbers for cryptographic keys, initialization vectors, or nonces creates vulnerabilities. Always use cryptographically secure random number generators.

**Mode and Padding Issues:** Using ECB mode, reusing initialization vectors in CBC mode, or implementing padding incorrectly creates vulnerabilities. Use authenticated encryption modes like GCM when available.

**Side-Channel Vulnerabilities:** Cryptographic implementations can leak information through timing, power consumption, electromagnetic emissions, or other side channels. Constant-time implementations prevent timing attacks. Hardware protections mitigate power analysis. These concerns primarily affect implementers of cryptographic libraries rather than their users, but awareness is important.

## Practical Applications

Understanding how cryptography applies in real systems helps contextualize abstract concepts.

**TLS/SSL:** Transport Layer Security secures internet communications. It uses asymmetric cryptography for authentication and key exchange, symmetric encryption for efficient data confidentiality, and hash functions for integrity. Modern TLS 1.3 streamlines the protocol while improving security.

**Password Storage:** Never store passwords in plaintext or using reversible encryption. Instead, hash passwords with specialized password hashing functions like Argon2, bcrypt, or scrypt. These functions are intentionally slow and use salt (random data unique to each password) to prevent rainbow table attacks.

**Digital Certificates and PKI:** Public Key Infrastructure uses certificates signed by trusted Certificate Authorities to bind public keys to identities. This enables secure communications with previously unknown parties by trusting the CA's verification of identity.

**Blockchain and Cryptocurrency:** Cryptocurrencies rely heavily on cryptographic hash functions for proof-of-work, digital signatures for transaction authorization, and asymmetric cryptography for wallet addresses.

**Secure Boot:** Secure boot uses digital signatures to verify that only trusted code runs during system initialization, preventing rootkits and bootkits. Firmware images are signed by vendors, and hardware verifies signatures before execution.

## Staying Current

Cryptography evolves as new attacks are discovered and computational power increases. What's secure today may be vulnerable tomorrow. Post-quantum cryptography addresses the threat quantum computers pose to current asymmetric algorithms. NIST is standardizing quantum-resistant algorithms expected to enter production in coming years.

Security professionals must stay informed about cryptographic developments through security advisories, academic research, and standards bodies. When vulnerabilities are discovered in cryptographic systems—like Heartbleed, POODLE, or BEAST—rapid response is essential.

Cryptography provides powerful tools for securing systems, but it's not magic. It must be applied correctly, within appropriate architectures, with proper key management, and as part of comprehensive security programs. Understanding cryptographic fundamentals enables security professionals to make informed decisions about when and how to apply cryptographic techniques to protect the systems and data they're responsible for securing.
