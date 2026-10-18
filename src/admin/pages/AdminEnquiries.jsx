import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Search,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  Trash2,
  Eye,
  X,
  Phone,
  Mail,
  FileText,
} from 'lucide-react';
import {
  getEnquiriesRequest,
  updateEnquiryStatusRequest,
  deleteEnquiryRequest,
} from '../../services/adminApi';

export const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const data = await getEnquiriesRequest({ status: statusFilter, search });
      setEnquiries(data);
    } catch (err) {
      console.error('Error fetching enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [statusFilter]);

  const handleStatusChange = async (id, newStatus) => {
    await updateEnquiryStatusRequest(id, newStatus);
    fetchEnquiries();
    if (selectedEnquiry && selectedEnquiry._id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Delete custom enquiry from ${name}?`)) {
      await deleteEnquiryRequest(id);
      fetchEnquiries();
      if (selectedEnquiry && selectedEnquiry._id === id) {
        setSelectedEnquiry(null);
      }
    }
  };

  const statusOptions = [
    'Received',
    'Consultation Scheduled',
    'Fabric Sourced',
    'Pattern Making',
    'In Production',
    'Fitting Scheduled',
    'Completed',
    'Cancelled',
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-charcoal/10">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-mauve" />
            <h1 className="font-display text-2xl sm:text-3xl text-charcoal font-normal">
              Custom Outfit Orders &amp; Leads
            </h1>
          </div>
          <p className="text-xs text-charcoal/70 font-sans mt-0.5">
            Track bespoke bridal, ethnic, and occasion couture client requests through your atelier pipeline.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-charcoal/10 p-4 rounded-sm shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchEnquiries()}
            placeholder="Search by client name, phone, or outfit category..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold text-charcoal/60 uppercase">Filter Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 text-xs bg-ivory/60 border border-charcoal/20 rounded-sm focus:outline-none focus:border-charcoal"
          >
            <option value="All">All Statuses</option>
            {statusOptions.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Enquiries List */}
      <div className="bg-white border border-charcoal/10 rounded-sm shadow-subtle overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs text-charcoal/50">Loading bespoke requests...</div>
        ) : enquiries.length === 0 ? (
          <div className="py-16 text-center text-xs text-charcoal/50">No enquiries match your search.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#FAF2F2] border-b border-charcoal/10 text-charcoal/70 uppercase tracking-wider font-semibold text-[11px]">
                  <th className="py-3 px-4">Client</th>
                  <th className="py-3 px-4">Outfit Details</th>
                  <th className="py-3 px-4">Event Date</th>
                  <th className="py-3 px-4">Budget Tier</th>
                  <th className="py-3 px-4">Pipeline Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10">
                {enquiries.map((enq) => (
                  <tr key={enq._id} className="hover:bg-ivory/40 transition-colors">
                    {/* Client Info */}
                    <td className="py-3.5 px-4">
                      <div>
                        <p className="font-display text-sm font-semibold text-charcoal">
                          {enq.fullName}
                        </p>
                        <p className="text-[11px] text-charcoal/70 flex items-center gap-1 mt-0.5">
                          <Phone className="w-3 h-3 text-mauve" />
                          <span>{enq.phone}</span>
                        </p>
                        <p className="text-[10px] text-charcoal/50 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-rose" />
                          <span>{enq.shippingCity || 'India'}</span>
                        </p>
                      </div>
                    </td>

                    {/* Outfit */}
                    <td className="py-3.5 px-4">
                      <div>
                        <p className="font-semibold text-charcoal">{enq.outfitCategory}</p>
                        <p className="text-[11px] text-charcoal/60">{enq.occasion}</p>
                        <span className="inline-block mt-1 text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-rose/15 text-mauve">
                          {enq.collectionType}
                        </span>
                      </div>
                    </td>

                    {/* Required Date */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5 text-charcoal/80 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-mauve" />
                        <span>{enq.requiredDate || 'Flexible'}</span>
                      </div>
                    </td>

                    {/* Budget */}
                    <td className="py-3.5 px-4 font-semibold text-charcoal">
                      {enq.budgetRange}
                    </td>

                    {/* Status Select */}
                    <td className="py-3.5 px-4">
                      <select
                        value={enq.status}
                        onChange={(e) => handleStatusChange(enq._id, e.target.value)}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded bg-white border border-charcoal/20 focus:outline-none focus:border-rose"
                      >
                        {statusOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hi ${enq.fullName}, this is Mukta from KEFI BY MUKTA. I am reaching out regarding your bespoke outfit request for ${enq.outfitCategory}. Could we discuss your fabric and styling preferences?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#2E7D32] border border-[#A5D6A7]"
                          title="Chat on WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4 fill-[#C8E6C9]" />
                        </a>

                        <button
                          type="button"
                          onClick={() => setSelectedEnquiry(enq)}
                          className="p-1.5 rounded hover:bg-charcoal/10 text-charcoal/70 hover:text-charcoal"
                          title="View Full Brief & Measurements"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(enq._id, enq.fullName)}
                          className="p-1.5 rounded hover:bg-red-50 text-charcoal/70 hover:text-red-600"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Details Slide-out Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-charcoal/15 rounded-sm shadow-luxury max-w-xl w-full p-6 space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-charcoal/10">
              <div>
                <span className="editorial-sub text-[10px] text-mauve">CLIENT SPECIFICATION SHEET</span>
                <h3 className="font-display text-xl text-charcoal font-semibold">
                  {selectedEnquiry.fullName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="p-1 rounded text-charcoal/50 hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-ivory p-3.5 rounded border border-charcoal/10">
                <div>
                  <span className="text-charcoal/50 text-[10px] uppercase font-semibold block">Phone</span>
                  <span className="font-semibold text-charcoal">{selectedEnquiry.phone}</span>
                </div>
                <div>
                  <span className="text-charcoal/50 text-[10px] uppercase font-semibold block">Email</span>
                  <span className="font-semibold text-charcoal">{selectedEnquiry.email || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-charcoal/50 text-[10px] uppercase font-semibold block">Location</span>
                  <span className="font-semibold text-charcoal">{selectedEnquiry.shippingCity}, {selectedEnquiry.shippingCountry}</span>
                </div>
                <div>
                  <span className="text-charcoal/50 text-[10px] uppercase font-semibold block">Needed By</span>
                  <span className="font-semibold text-rose font-mono">{selectedEnquiry.requiredDate || 'TBD'}</span>
                </div>
              </div>

              <div>
                <span className="text-charcoal/50 text-[10px] uppercase font-semibold block mb-1">
                  Design &amp; Silhouette Description
                </span>
                <p className="bg-ivory/50 p-3 rounded border border-charcoal/10 text-charcoal/80 leading-relaxed font-sans">
                  {selectedEnquiry.description || 'No specific description provided.'}
                </p>
              </div>

              {selectedEnquiry.measurementsNotes && (
                <div>
                  <span className="text-charcoal/50 text-[10px] uppercase font-semibold block mb-1">
                    Measurements &amp; Proportions
                  </span>
                  <p className="bg-ivory/50 p-3 rounded border border-charcoal/10 text-charcoal/80 font-mono">
                    {selectedEnquiry.measurementsNotes}
                  </p>
                </div>
              )}

              {selectedEnquiry.referenceImageUrl && (
                <div>
                  <span className="text-charcoal/50 text-[10px] uppercase font-semibold block mb-1">
                    Reference Photo
                  </span>
                  <div className="w-32 h-40 rounded border border-charcoal/10 overflow-hidden">
                    <img
                      src={selectedEnquiry.referenceImageUrl}
                      alt="Client Reference"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between">
              <span className="text-[11px] text-charcoal/60">
                Created: {new Date(selectedEnquiry.createdAt).toLocaleDateString()}
              </span>
              <a
                href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hi ${selectedEnquiry.fullName}, this is Mukta from KEFI BY MUKTA. Following up on your custom design brief for ${selectedEnquiry.outfitCategory}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#1F4B38] border border-[#A5D6A7] font-semibold uppercase tracking-wider rounded-sm text-xs flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-[#C8E6C9]" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
