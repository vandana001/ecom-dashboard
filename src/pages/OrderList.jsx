import React, { useState } from "react";
import { Table, Tag, Space, Button, Input } from "antd";
import {
  PlusOutlined,
  FilterOutlined,
  SortAscendingOutlined,
  SearchOutlined,
  CopyOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Calendar } from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // adjust the path

import avatarimg from "../assets/avatarimg.png";
import avatarimg1 from "../assets/avatarimg1.png";
import avatarimg2 from "../assets/avatarimg2.png";
import avatarimg3 from "../assets/avatarimg3.png";
import avatarimg4 from "../assets/avatarimg4.png";

const OrderListTable = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";
  const [selectedRowKeys, setSelectedRowKeys] = useState([3]);

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      render: (text) => (
        <span style={{ color: isDark ? "#f1f5f9" : "#666" }}>{text}</span>
      ),
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (user) => (
        <Space>
          <img
            src={user.avatar}
            alt={user.name}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span style={{ color: isDark ? "#f1f5f9" : "#111827" }}>
            {user.name}
          </span>
        </Space>
      ),
    },
    { title: "Project", dataIndex: "project", key: "project" },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text, record) => (
        <Space>
          <span style={{ color: isDark ? "#f1f5f9" : "#111827" }}>{text}</span>
          {record.hasCopy && (
            <CopyOutlined style={{ color: "#999", fontSize: "12px" }} />
          )}
        </Space>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <Space>
          <Calendar size={14} style={{ color: "#999" }} />
          <span style={{ color: isDark ? "#f1f5f9" : "#111827" }}>{text}</span>
        </Space>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const colors = {
          "In Progress": "blue",
          Complete: "green",
          Pending: "default",
          Approved: "gold",
          Rejected: "red",
        };
        return <Tag color={colors[status]}>{status}</Tag>;
      },
    },
    {
      title: "",
      key: "action",
      width: 50,
      render: () => <Button type="text" icon={<MoreOutlined />} />,
    },
  ];

  const data = [
    {
      key: 1,
      orderId: "#CM9801",
      user: { name: "Natali Craig", avatar: avatarimg },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      key: 2,
      orderId: "#CM9802",
      user: { name: "Kate Morrison", avatar: avatarimg1 },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      key: 3,
      orderId: "#CM9803",
      user: { name: "Drew Cano", avatar: avatarimg2 },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      key: 4,
      orderId: "#CM9804",
      user: { name: "Natali Craig", avatar: avatarimg3 },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      key: 5,
      orderId: "#CM9805",
      user: { name: "Natali Craig", avatar: avatarimg4 },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => setSelectedRowKeys(selectedKeys),
  };

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: isDark ? "#1e293b" : "#ffffff",
        color: isDark ? "#f1f5f9" : "#111827",
        border: isDark ? "1px solid #334155" : "1px solid #e5e7eb",
        borderRadius: 8,
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600" }}>
          Order List
        </h2>
      </div>

      {/* Actions */}
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Space>
          <Button icon={<PlusOutlined />} />
          <Button icon={<FilterOutlined />} />
          <Button icon={<SortAscendingOutlined />} />
        </Space>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
          style={{ width: 200 }}
        />
      </div>

      {/* Table */}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomRight"], pageSize: 5, showSizeChanger: false }}
      />
    </div>
  );
};

export default OrderListTable;
