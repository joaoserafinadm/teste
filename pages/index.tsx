// File: pages/index.tsx
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState('15 Dias');
  const [balanceVisible, setBalanceVisible] = useState(false);

  // Mock transaction data
  const transactions = [
    {
      date: '22/04/2025',
      transactions: [
        {
          recipient: 'Nonemacher Postos De Combustiveis Ltda',
          amount: -11.49
        }
      ]
    },
    {
      date: '20/04/2025',
      transactions: [
        {
          recipient: 'Chinazzo Comercio De Alimentos Ltda',
          amount: -7.50
        },
        {
          recipient: 'Aldair Jose Pinheiro',
          amount: -200.00
        }
      ]
    },
    {
      date: '19/04/2025',
      transactions: [
        {
          recipient: 'Andre Teixeira Jacques',
          amount: -300.00
        },
        {
          recipient: 'Dutra E Dutra Comercio De Cosmeticos Ltda',
          amount: -59.90
        },
        {
          recipient: 'Super Pavan Comercio De Alimentos',
          amount: -170.54 // This one is shown incomplete in the image
        },
        {
          recipient: 'Gowd Instituicao De Pagamento Ltda',
          amount: 1077.44 // This one is shown incomplete in the image
        }

      ]
    },
    {
      date: '18/04/2025',
      transactions: [
        {
          recipient: 'Rush Alimentos Ltda Me',
          amount: -24.00
        },
        {
          recipient: 'Conv',
          amount: -41.00
        },

      ]
    },
    {
      date: '17/04/2025',
      transactions: [
        {
          recipient: 'Lupulando Fabricacao de Cer',
          amount: -8.00
        },
        {
          recipient: 'Lupulando Fabricacao de Cer',
          amount: -8.00
        },
        {
          recipient: 'Alexandre Hachmann',
          amount: -33.00
        },
        {
          recipient: 'Lupulando Fabricacao de Cer',
          amount: -8.00
        },
        {
          recipient: 'Lupulando Fabricacao de Cer',
          amount: -8.00
        },
        {
          recipient: 'Bfg Choperia Ltda',
          amount: -58.00
        },
        {
          recipient: 'Nonemacher Postos De Combustiveis',
          amount: -12.50
        },

      ]
    },
    {
      date: '16/04/2025',
      transactions: [
        {
          recipient: 'Nonemacher Postos De Combustiveis Ltda',
          amount: -9.49
        },
       

      ]
    },
    {
      date: '15/04/2025',
      transactions: [
        {
          recipient: 'Lara Locacao De Trajes Ltda',
          amount: -450.00
        },
       

      ]
    },
    {
      date: '14/04/2025',
      transactions: [
        {
          recipient: 'Padaria E Confeitaria Zielinkski Ltda',
          amount: -15.49
        },
       

      ]
    },
    {
      date: '13/04/2025',
      transactions: [
        {
          recipient: 'Collinas Comercio De Combustiveis Ltda',
          amount: -7.50
        },
       

      ]
    },
    {
      date: '11/04/2025',
      transactions: [
        {
          recipient: '53.989.835. Vidmar Bobermen De Souza',
          amount: -37.00
        },
        {
          recipient: 'Nonemacher Postos De Combustiveis Ltda',
          amount: -11.49
        },
       

      ]
    },
    {
      date: '10/04/2025',
      transactions: [
        {
          recipient: 'Albino Bocchi Comercio De Bicicletas Ltda',
          amount: -20.00
        },
        {
          recipient: 'Otavio Kosloski',
          amount: -11.49
        },
        {
          recipient: 'Nonemacher Postos De Combustiveis Ltda',
          amount: -20.48
        },
       

      ]
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Movimentações Pix</title>
        <meta name="description" content="Movimentações Pix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.backButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#6FCF97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className={styles.title}>Movimentações Pix</h1>
          <div className={styles.helpButton}>
            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#6FCF97" strokeWidth="2"/>
              <path d="M12 17V17.01M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14ZM12 14V16" stroke="#6FCF97" strokeWidth="2" strokeLinecap="round"/>
            </svg> */}
          </div>
        </div>

        <div className={styles.balanceCard}>
          <div className={styles.balanceInfo}>
            <p className={styles.balanceLabel}>Saldo disponível em conta</p>
            <div className={styles.balanceValue}>
              <span>R$ {balanceVisible ? '333,85' : '********'}</span>
              <button 
                className={styles.visibilityToggle}
                onClick={() => setBalanceVisible(!balanceVisible)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="3" stroke="#888" strokeWidth="2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.filterSection}>
          <span className={styles.filterLabel}>Filtrar por:</span>
          <div className={styles.filterButtons}>
            <button 
              className={`${styles.filterButton} ${selectedFilter === '15 Dias' ? styles.active : ''}`}
              onClick={() => setSelectedFilter('15 Dias')}
            >
              15 Dias
            </button>
            <button 
              className={`${styles.filterButton} ${selectedFilter === '90 Dias' ? styles.active : ''}`}
              onClick={() => setSelectedFilter('90 Dias')}
            >
              90 Dias
            </button>
            <button 
              className={`${styles.filterButton} ${selectedFilter === 'Agendados' ? styles.active : ''}`}
              onClick={() => setSelectedFilter('Agendados')}
            >
              Agendados
            </button>
            <button 
              className={`${styles.filterButton} ${selectedFilter === 'Penden' ? styles.active : ''}`}
              onClick={() => setSelectedFilter('Penden')}
            >
              Penden
            </button>
          </div>
        </div>

        <div className={styles.transactionsList}>
          {transactions.map((dateGroup, idx) => (
            <div key={idx}>
              <div className={styles.dateHeader}>
                <span>{dateGroup.date}</span>
              </div>
              
              {dateGroup.transactions.map((transaction, transIdx) => (
                <div className={styles.transactionItem} key={transIdx}>
                  <div className={styles.transactionItemLeft}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: transaction.amount > 0 ? 'rotate(135deg)' : 'rotate(315deg)'}}>
                      <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke={transaction.amount > 0 ? "#4d9f2a" : "#FF6B6B"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.transactionItemMiddle}>
                    <div className={styles.transactionDescription}>
                      Pix para {transaction.recipient}
                    </div>
                    <div className={transaction.amount> 0 ? styles.transactionAmountUp : styles.transactionAmount}>
                      R$ {transaction.amount ? transaction.amount.toFixed(2).replace('.', ',') : '???,??'}
                    </div>
                  </div>
                  <div className={styles.transactionItemRight}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="#6FCF97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        
      </main>
    </div>
  );
}