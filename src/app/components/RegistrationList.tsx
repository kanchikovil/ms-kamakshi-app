'use client';

import React, { useEffect, useState } from 'react';
import Registration from '../types/Registration';
import { approveRegistration } from '../services/registrationService';

const RegistrationList: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [counts, setCounts] = useState<{ totalCount: number; approvedCount: number; rejectedCount: number }>({
    totalCount: 0,
    approvedCount: 0,
    rejectedCount: 0,
  });

  // Fetch Registrations List
  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const apiRes = await fetch('http://localhost:8080/api/registrations');
        const res = await apiRes.json();
        setRegistrations(res.data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchRegistrations();
  }, []);

  // Fetch Registration Counts
  useEffect(() => {
    async function fetchCounts() {
      try {
        const countRes = await fetch('http://localhost:8080/api/registrations-count');
        const countData = await countRes.json();
        setCounts(countData.data);
      } catch (error) {
        console.error('Error fetching registration counts:', error);
      }
    }
    fetchCounts();
  }, []);

  // Handle Approval
  const handleApproval = async (id: number, status: string) => {
    await approveRegistration(id, status);
    
    // Refresh the lists and counts
    setRegistrations((prev) =>
      prev.map((reg) => (reg.id === id ? { ...reg, approvalStatus: status } : reg))
    );
    
    // Refresh counts
    fetchCounts();
  };

  // Fetch updated counts
  async function fetchCounts() {
    try {
      const countRes = await fetch('http://localhost:8080/api/registrations-count');
      const countData = await countRes.json();
      setCounts(countData.data);
    } catch (error) {
      console.error('Error fetching registration counts:', error);
    }
  }

  if (loading) return <p>Loading registrations...</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Registration List */}
      <div style={{ flex: 1 }}>
        <h2>Registrations</h2>
        {registrations.length === 0 ? (
          <p>No registrations found.</p>
        ) : (
          <ul>
            {registrations.map((registration) => (
              <li key={registration.id}>
                {registration.userName} - {registration.userPhone}
                {(registration.approvalStatus !== 'APPROVED' && registration.approvalStatus !== 'REJECTED') ? (
                  <>
                    <button onClick={() => handleApproval(registration.id || 0, 'APPROVED')}>Approve</button>
                    <button onClick={() => handleApproval(registration.id || 0, 'REJECTED')}>Reject</button>
                  </>
                ) : (
                  <span>{registration.approvalStatus}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Registration Count Table */}
      <div style={{ flex: 0.5, marginLeft: '20px' }}>
        <h3>Registration Stats</h3>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>Total</th>
              <th>Approved</th>
              <th>Rejected</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{counts.totalCount}</td>
              <td>{counts.approvedCount}</td>
              <td>{counts.rejectedCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationList;
