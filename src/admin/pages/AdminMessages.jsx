import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  X,
} from 'lucide-react';
import { getContactsRequest, updateContactStatusRequest } from '../../services/adminApi';

export const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const data = await getContactsRequest();
      setMessages(data);
    } catch (err) {
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleToggleStatus = async (msg) => {
    const nextStatus = msg.status === 'New' ? 'Read' : 'New';
    await updateContactStatusRequest(msg._id, nextStatus);
    fetchMessages();
    if (selectedMessage && selectedMessage._id === msg._id) {
      setSelectedMessage({ ...selectedMessage, status: nextStatus });
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-charcoal/10">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-mauve" />
            <h1 className="font-display text-2xl sm:text-3xl text-charcoal font-normal">
              Contact Form Inquiries
            </h1>
          </div>
          <p className="text-xs text-charcoal/70 font-sans mt-0.5">
            Messages and appointment requests sent through the public Contact page.
          </p>
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white border border-charcoal/10 rounded-sm shadow-subtle overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs text-charcoal/50">Loading studio messages...</div>
        ) : messages.length === 0 ? (
          <div className="py-16 text-center text-xs text-charcoal/50">No contact messages received yet.</div>
        ) : (
          <div className="divide-y divide-charcoal/10">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`p-5 hover:bg-ivory/40 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                  msg.status === 'New' ? 'bg-[#FAF0F1]/40 border-l-4 border-rose' : ''
                }`}
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className="font-display text-base font-semibold text-charcoal">
                      {msg.name}
                    </span>
                    <span
                      className={`text-[9px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        msg.status === 'New'
                          ? 'bg-rose text-charcoal font-bold'
                          : 'bg-charcoal/10 text-charcoal/60'
                      }`}
                    >
                      {msg.status}
                    </span>
                    <span className="text-[10px] text-charcoal/40">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-charcoal">
                    {msg.subject}
                  </p>
                  <p className="text-xs text-charcoal/70 line-clamp-2 leading-relaxed font-sans">
                    {msg.message}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-charcoal/60 pt-1">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-mauve" />
                      <span>{msg.phone}</span>
                    </span>
                    {msg.email && (
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-rose" />
                        <span>{msg.email}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(msg)}
                    className="px-2.5 py-1.5 text-[11px] font-semibold border border-charcoal/20 hover:bg-black/5 rounded text-charcoal transition-colors"
                  >
                    Mark {msg.status === 'New' ? 'Read' : 'Unread'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMessage(msg)}
                    className="p-1.5 rounded hover:bg-black/5 text-charcoal/70 hover:text-charcoal"
                    title="View Message"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hi ${msg.name}, this is Mukta from KEFI BY MUKTA regarding your message: "${msg.subject}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#1F4B38] border border-[#A5D6A7] rounded text-xs font-semibold uppercase"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#C8E6C9]" />
                    <span>Reply</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-charcoal/15 rounded-sm shadow-luxury max-w-lg w-full p-6 space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-charcoal/10">
              <div>
                <span className="editorial-sub text-[10px] text-mauve">STUDIO MESSAGE INQUIRY</span>
                <h3 className="font-display text-xl text-charcoal font-semibold">
                  {selectedMessage.subject}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMessage(null)}
                className="p-1 rounded text-charcoal/50 hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-ivory p-3.5 rounded border border-charcoal/10 text-xs space-y-1">
              <p><strong>From:</strong> {selectedMessage.name}</p>
              <p><strong>Phone:</strong> {selectedMessage.phone}</p>
              <p><strong>Email:</strong> {selectedMessage.email || 'N/A'}</p>
              <p><strong>Sent:</strong> {new Date(selectedMessage.createdAt).toLocaleString()}</p>
            </div>

            <div className="space-y-1 text-xs">
              <span className="text-charcoal/50 uppercase font-semibold text-[10px] block">
                Message Content:
              </span>
              <p className="p-3 bg-ivory/50 rounded border border-charcoal/10 text-charcoal/80 leading-relaxed font-sans whitespace-pre-wrap">
                {selectedMessage.message}
              </p>
            </div>

            <div className="pt-3 border-t border-charcoal/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleToggleStatus(selectedMessage)}
                className="text-xs font-semibold text-mauve hover:text-charcoal"
              >
                Toggle {selectedMessage.status === 'New' ? 'Read' : 'New'} Status
              </button>

              <a
                href={`https://wa.me/${selectedMessage.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hi ${selectedMessage.name}, this is Mukta from KEFI BY MUKTA regarding your message about ${selectedMessage.subject}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#E8F5E9] hover:bg-[#C8E6C9] text-[#1F4B38] border border-[#A5D6A7] font-semibold uppercase tracking-wider rounded text-xs flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-[#C8E6C9]" />
                <span>Reply on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
