import React, { useState, useEffect } from "react"
import { View, Text, SectionList, StyleSheet, ScrollView } from "react-native"

function GenericDashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    // Mock data
    const mockData = {
      companies: [
        {
          name: "J Page Corporation",
          data: [
            {
              Date: "2024-01-01",
              Sales: 100,
              Revenue: 1000,
              Expenses: 800,
              Profit: 200
            },
            {
              Date: "2024-01-02",
              Sales: 120,
              Revenue: 1200,
              Expenses: 900,
              Profit: 300
            },
            {
              Date: "2024-01-03",
              Sales: 110,
              Revenue: 1100,
              Expenses: 850,
              Profit: 250
            },
            {
              Date: "2024-01-04",
              Sales: 90,
              Revenue: 900,
              Expenses: 750,
              Profit: 150
            },
            {
              Date: "2024-01-05",
              Sales: 130,
              Revenue: 1300,
              Expenses: 1000,
              Profit: 300
            },
            {
              Date: "2024-01-06",
              Sales: 140,
              Revenue: 1400,
              Expenses: 1100,
              Profit: 300
            },
            {
              Date: "2024-01-07",
              Sales: 150,
              Revenue: 1500,
              Expenses: 1200,
              Profit: 300
            }
          ]
        },
        {
          name: "D Bowie Enterprises",
          data: [
            {
              Date: "2024-01-01",
              Sales: 80,
              Revenue: 800,
              Expenses: 700,
              Profit: 100
            },
            {
              Date: "2024-01-02",
              Sales: 100,
              Revenue: 1000,
              Expenses: 800,
              Profit: 200
            },
            {
              Date: "2024-01-03",
              Sales: 90,
              Revenue: 900,
              Expenses: 750,
              Profit: 150
            },
            {
              Date: "2024-01-04",
              Sales: 70,
              Revenue: 700,
              Expenses: 650,
              Profit: 50
            },
            {
              Date: "2024-01-05",
              Sales: 110,
              Revenue: 1100,
              Expenses: 850,
              Profit: 250
            },
            {
              Date: "2024-01-06",
              Sales: 120,
              Revenue: 1200,
              Expenses: 900,
              Profit: 300
            },
            {
              Date: "2024-01-07",
              Sales: 130,
              Revenue: 1300,
              Expenses: 1000,
              Profit: 300
            }
          ]
        },
        {
          name: "Fleetwood Incorporated",
          data: [
            {
              Date: "2024-01-01",
              Sales: 70,
              Revenue: 700,
              Expenses: 600,
              Profit: 100
            },
            {
              Date: "2024-01-02",
              Sales: 90,
              Revenue: 900,
              Expenses: 750,
              Profit: 150
            },
            {
              Date: "2024-01-03",
              Sales: 80,
              Revenue: 800,
              Expenses: 700,
              Profit: 100
            },
            {
              Date: "2024-01-04",
              Sales: 60,
              Revenue: 600,
              Expenses: 550,
              Profit: 50
            },
            {
              Date: "2024-01-05",
              Sales: 100,
              Revenue: 1000,
              Expenses: 800,
              Profit: 200
            },
            {
              Date: "2024-01-06",
              Sales: 110,
              Revenue: 1100,
              Expenses: 850,
              Profit: 250
            },
            {
              Date: "2024-01-07",
              Sales: 120,
              Revenue: 1200,
              Expenses: 900,
              Profit: 300
            }
          ]
        }
      ]
    }

    setData(mockData.companies)
  }, [])
  const Header = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>BearShark Corporate View</Text>
    </View>
  )
  const Footer = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 BearShark</Text>
    </View>
  )
  // Calculate total
  const calculateTotal = property => {
    return data.reduce((total, company) => {
      const companyTotal = company.data.reduce(
        (total, item) => total + item[property],
        0
      )
      return total + companyTotal
    }, 0)
  }

  // Calculate totals
  const totalProfit = calculateTotal("Profit")
  const totalRevenue = calculateTotal("Revenue")
  const totalExpenses = calculateTotal("Expenses")
  const totalSales = calculateTotal("Sales")
  // Function to format number as a dollar amount
  const formatAsDollarAmount = number => {
    return `$${number.toLocaleString("en-US", { minimumFractionDigits: 2 })}`
  }

  // Use the function to format totalProfit
  const formattedTotalProfit = formatAsDollarAmount(totalProfit)
  const formattedTotalRevenue = formatAsDollarAmount(totalRevenue)
  const formattedTotalExpenses = formatAsDollarAmount(totalExpenses)
  const formattedTotalSales = formatAsDollarAmount(totalSales)
  // Calculate total profit for each company and add it to the company object
  data.forEach(company => {
    company.totalProfit = company.data.reduce(
      (total, item) => total + item.Profit,
      0
    )
  })
  data.forEach(company => {
    company.totalRevenue = company.data.reduce(
      (total, item) => total + item.Revenue,
      0
    )
  })
  data.forEach(company => {
    company.totalExpenses = company.data.reduce(
      (total, item) => total + item.Expenses,
      0
    )
  })
  data.forEach(company => {
    company.totalSales = company.data.reduce(
      (total, item) => total + item.Sales,
      0
    )
  })

  // Sort companies by total profit in descending order
  const sortedCompanies = [...data].sort(
    (a, b) => b.totalProfit - a.totalProfit
  )

  // Now, when you map over the sortedCompanies array, the companies will be in order of highest total profit

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.row}>
        <ScrollView>
          {data.map((company, index) => (
            <View key={index} style={styles.companyContainer}>
              <Text style={styles.companyName}>{company.name}</Text>
              <View style={styles.legendRow}>
                <Text style={styles.dataLegend}>Date</Text>
                <Text style={styles.dataLegend}>Sales</Text>
                <Text style={styles.dataLegend}>Revenue</Text>
                <Text style={styles.dataLegend}>Expenses</Text>
                <Text style={styles.dataLegend}>Profit</Text>
              </View>
              {company.data.map((item, itemIndex) => (
                <View key={itemIndex} style={styles.dataRow}>
                  <Text style={styles.dataItem}>{item.Date}</Text>
                  <Text style={styles.dataItem}>{item.Sales}</Text>
                  <Text style={styles.dataItem}>{item.Revenue}</Text>
                  <Text style={styles.dataItem}>{item.Expenses}</Text>
                  <Text style={styles.dataItem}>{item.Profit}</Text>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
        <View style={styles.leftBar}>
          <View style={styles.lbCalc}>
            <Text style={styles.lbLegend}>Total Sales</Text>
            <Text style={styles.lbData}>{formattedTotalSales}</Text>
          </View>
          <View style={styles.lbCalc}>
            <Text style={styles.lbLegend}>Total Profit</Text>
            <Text style={styles.lbData}>{formattedTotalProfit}</Text>
          </View>
          <View style={styles.lbCalc}>
            <Text style={styles.lbLegend}>Total Revenue</Text>
            <Text style={styles.lbData}>{formattedTotalRevenue}</Text>
          </View>
          <View style={styles.lbCalc}>
            <Text style={styles.lbLegend}>Total Expenses</Text>
            <Text style={styles.lbData}>{formattedTotalExpenses}</Text>
          </View>
          <View style={styles.lbCalc}>
            <Text style={styles.lbLegend}>Highest Sales</Text>
            <View style={styles.lbList}>
              {sortedCompanies.map((company, itemIndex) => (
                <View key={itemIndex} style={styles.row}>
                  <Text style={styles.lbListItem} key={itemIndex}>
                    {company.name}
                  </Text>
                  <Text style={styles.lbListItem}>
                    {formatAsDollarAmount(company.totalSales)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.lbCalc}>
            <Text style={styles.lbLegend}>Profits Leader Board</Text>
            <View style={styles.lbList}>
              {sortedCompanies.map((company, itemIndex) => (
                <View key={itemIndex} style={styles.row}>
                  <Text style={styles.lbListItem} key={itemIndex}>
                    {company.name} -
                  </Text>
                  <Text style={styles.lbListItem}>
                    {formatAsDollarAmount(company.totalProfit)}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.lbCalc}>
            <Text style={styles.lbLegend}>Highest Revenues</Text>
            <View style={styles.lbList}>
              {sortedCompanies.map((company, itemIndex) => (
                <View key={itemIndex} style={styles.row}>
                  <Text style={styles.lbListItem} key={itemIndex}>
                    {company.name}
                  </Text>
                  <Text style={styles.lbListItem}>
                    {formatAsDollarAmount(company.totalRevenue)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.lbCalc}>
            <Text style={styles.lbLegend}>Highest Expenses</Text>
            <View style={styles.lbList}>
              {sortedCompanies.map((company, itemIndex) => (
                <View key={itemIndex} style={styles.row}>
                  <Text style={styles.lbListItem} key={itemIndex}>
                    {company.name}
                  </Text>
                  <Text style={styles.lbListItem}>
                    {formatAsDollarAmount(company.totalExpenses)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30
  },
  companyContainer: {
    marginBottom: 20,
    width: "97%"
  },
  companyName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 3
  },

  dataItem: {
    width: "20%", // Adjust as needed
    color: "#808080"
  },
  dataLegend: {
    width: "20%", // Adjust as needed
    fontWeight: "bold"
  },
  footer: {
    justifyContent: "center",
    height: "5%",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: 20,
    borderTopWidth: "1px"
  },
  footerText: {
    color: "#808080",
    fontSize: 16
  },
  header: {
    justifyContent: "center",
    height: "5%",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: 20,
    borderBottomWidth: "1px"
  },
  headerText: {
    flex: 1,
    fontSize: "2em",
    fontWeight: "bold",
    color: "#808080",
    paddingBottom: 5
  },

  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "lightgray", // Change as needed
    padding: 10
  },
  itemImage: {
    width: "100%",
    height: 150, // Change as needed
    resizeMode: "cover" // Change as needed
  },
  itemName: {
    fontSize: 16, // Change as needed
    fontWeight: "bold" // Change as needed
  },
  itemPrice: {
    fontSize: 14 // Change as needed
  },
  lbCalc: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 10
  },
  lbData: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#808080"
  },
  lbLegend: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  lbList: {
    color: "#808080",
    fontSize: 16,
    justifyContent: "space-between",
    flex: 1
  },
  lbListItem: {
    fontSize: 16,
    color: "#808080",
    marginBottom: 5,
    marginTop: 5
  },
  leftBar: {
    width: "30%",
    backgroundColor: "#FFFFFF",

    padding: 10
  },
  legendRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 3
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
})
export default {
  title: "generic-dashboard",
  navigator: GenericDashboard
}
