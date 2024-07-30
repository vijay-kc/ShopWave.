const [sideBsrVisible , setSideBarVisible]=useState(false);
const navigate=useNavigate();
const Menu=[{ name: "Dashboard", path: "/admin" ,icon:<DashboardIcon/>},
{ name: "Products", path: "/admin/products" },
{ name: "Customers", path: "/admin/customers" },
{ name: "Orders", path: "/admin/orders" },
{ name: "AddProducts", path: "/admin/product/create" },

{ name: "Subcategories", path: "/admin/subcategories" },
{ name: "Brands", path: "/admin/brands" },
{ name: "Coupons", path: "/admin/coupons" },
{ name: "Reports", path: "/admin/reports" },
{ name: "Settings", path: "/admin/settings" },
{ name: "Logout", path: "/logout" },
]
const drawer = (
    <Box sx={{
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"

    }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => { navigate(item.path) }}>
          <ListItemButton>
            <ListItemIcon>
             {item.icon}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>)}
      </List>


    </Box>
  )