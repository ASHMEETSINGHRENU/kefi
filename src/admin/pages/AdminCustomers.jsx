import React, { useState, useEffect } from 'react';
import { Users, Search, MessageCircle, Phone, Mail, MapPin, Calendar, Sparkles } from 'lucide-react';
import { getCustomersRequest } from '../../services/adminApi';

export const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const data = await getCustomersRequest();
      setCustomers(data);
    } catch (err) {
      console.error('Error fetching customers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter((c) => {
    const s = search.toLowerCase();
    return (
      c.fullName.toLowerCase().includes(s) ||
      c.phone.toLowerCase().includes(s) ||
      c.email.toLowerCase().includes(s) ||
      c.city.toLowerCase().includes(s)
    );
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-charcoal/10">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-mauve" />
            <h1 className="font-display text-2xl sm:text-3xl text-charcoal font-normal">
              Customer &amp; Client Directory
            </h1>
          </div>
          <p className="text-xs text-charcoal/70 font-sans mt-0.5">
            Directory of brides, wedding parties, and patrons who have enquired or ordered from KEFI BY MUKTA.
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-white border border-charcoal/10 p-4 rounded-sm shadow-xs flex items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by client name, phone number, city, or email..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
          />
        </div>
        <p className="text-xs font-semibold text-charcoal/60 hidden sm:block">
          Total Patrons: {filteredCustomers.length}
        </p>
      </div>

      {/* Customers Table */}
      <div className="bg-white border border-charcoal/10 rounded-sm shadow-subtle overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs text-charcoal/50">Loading customer records...</div>
        ) : filteredCustomers.length === 0 ? (
          <div className="py-16 text-center text-xs text-charcoal/50">No customer records found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF2F2] border-b border-charcoal/10 text-charcoal/70 uppercase tracking-wider font-semibold text-[11px]">
                  <th className="py-3 px-4">Patron Name</th>
                  <th className="py-3 px-4">Contact Details</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Bespoke Orders</th>
                  <th className="py-3 px-4">Recent Occasion / Request</th>
                  <th className="py-3 px-4 text-right">Quick Connect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10">
                {filteredCustomers.map((cust) => (
                  <tr key={cust.id} className="hover:bg-ivory/40 transition-colors">
                    {/* Name */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-rose/20 text-charcoal font-display font-semibold flex items-center justify-center text-sm shrink-0">
                          {cust.fullName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-display text-sm font-semibold text-charcoal">
                            {cust.fullName}
                          </p>
                          <p className="text-[10px] text-charcoal/50">
                            Active since {new Date(cust.lastActive).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Phone & Email */}
                    <td className="py-3.5 px-4">
                      <div className="space-y-0.5">
                        <p className="font-medium text-charcoal flex items-center gap-1.5">
                          <Phone className="w-3 h-3 text-mauve" />
                          <span>{cust.phone}</span>
                        </p>
                        <p className="text-charcoal/60 flex items-center gap-1.5 text-[11px]">
                          <Mail className="w-3 h-3 text-rose" />
                          <span>{cust.email}</span>
                        </p>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-ivory border border-charcoal/10 text-charcoal/80 font-medium">
                        <MapPin className="w-3 h-3 text-rose" />
                        <span>{cust.city}</span>
                      </span>
                    </td>

                    {/* Total Enquiries */}
                    <td className="py-3.5 px-4 font-semibold text-charcoal">
                      <span className="px-2.5 py-1 rounded-full bg-rose/15 text-charcoal text-[11px]">
                        {cust.totalEnquiries} {cust.totalEnquiries === 1 ? 'Enquiry' : 'Enquiries'}
                      </span>
                    </td>

                    {/* Recent Occasion */}
                    <td className="py-3.5 px-4 text-charcoal/80">
                      <p className="font-medium truncate max-w-xs">{cust.latestOccasion}</p>
                      <span className="text-[10px] text-charcoal/50">{cust.latestStatus}</span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <a
                        href={`https://wa.me/${cust.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Hi ${cust.fullName}, this is Mukta from KEFI BY MUKTA atelier. Hope you are well!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#1F4B38] border border-[#A5D6A7] rounded-sm font-semibold uppercase text-[11px] tracking-wider transition-colors shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-[#C8E6C9]" />
                        <span>WhatsApp</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
