import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/main.css";

export default function HistoryTable({ refresh }) {
    const [logs, setLogs] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 5;

    const fetchLogs = async (pageNumber = 1) => {
        setLoading(true);
        try {
            const res = await axios.get(`https://rest-client-app.onrender.com/api/history?page=${page}&limit=${limit}`);
            setLogs(res.data.logs);
            setTotal(res.data.total);
            setPage(res.data.page);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchLogs(page);
    }, [page , refresh]);

    const totalPages = Math.ceil(total / limit);

    return (
        <div className="history-container">
            <h2>Request History</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>Method</th>
                                <th>URL</th>
                                <th>Response</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log) => (
                                <tr key={log._id}>
                                    <td>{log.method}</td>
                                    <td>{log.url}</td>
                                    <td><pre>{JSON.stringify(log.response, null, 2)}</pre></td>
                                    <td>{new Date(log.createdAt).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
                            Prev
                        </button>
                        <span>Page {page} of {totalPages}</span>
                        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
