import { supabase } from "../supabaseClient"

export async function FetchProducts(){
    const {data, error} = await supabase
    .from('products')
    .select(`
        id,
        name,
        description,
        price,
        delivery_time,
        image,
        product_sizes (
          sizes (
            name,
            abs
          )
        ),
        product_colors (
          colors (
            name
          )
        )
    `)

    if (error){
        console.error('Error fetching products:', error.message)
        throw error
    }

    // Transform to match your desired structure
    return data.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        delivery_time: product.delivery_time,
        image: product.image,
        sizes: product.product_sizes.map(ps => ps.sizes),
        colors: product.product_colors.map(pc => pc.colors)
    }))

    // return data
}

export async function FetchProduct(id) {
    const {data, error} = await supabase
    .from('products')
    .select(`*,
        product_sizes (
          sizes (
            name,
            abs
          )
        ),
        product_colors (
          colors (
            name
          )
        )
    `)
    .eq('id', id)
    .single();

    if (error){
        console.log('Error fetching product:', error.message);
        return null
    }

    return data;
}

export async function getOrCreateCustomer({ first_name, last_name, address_line_1, zip_code, phone, city, state, building_no }) {

    // Check if customer exists
    const { data: existingCustomer, error: selectError } = await supabase
      .from("customer")
      .select("*")
      .eq("phone", phone)
      .maybeSingle();

    if (selectError) {
      throw new Error(`Error checking customer: ${selectError.message}`);
    }

    if (existingCustomer) {
      return existingCustomer;
    }

    // Create new customer
    const { data: newCustomer, error: insertError } = await supabase
      .from("customer")
      .insert([
        {
            first_name,
            last_name,
            state,
            city,
            zip_code,
            phone,
            address_line_1,
            building_no
        },
      ])
      .select()
      .single();

    if (insertError) {
      throw new Error(`Error creating customer: ${insertError.message}`);
    }

    return newCustomer;
}

export async function searchProducts(query) {
    const { data, error } = await supabase
    .from('products')
    .select('*')
    .ilike('name', `%${query}%`);

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}